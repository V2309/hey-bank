package com.bank.gateway.keycloak;

import com.bank.gateway.user.RegisterRequest;
import com.bank.gateway.user.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.ReactiveStringRedisTemplate;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.time.Duration;

@Component
@Slf4j
@RequiredArgsConstructor
public class KeycloakUserSyncFilter implements WebFilter {

    private static final String REDIS_SYNC_PREFIX = "user:synced:";
    private static final Duration CACHE_TTL = Duration.ofHours(24);

    private final UserService userService;
    private final ReactiveStringRedisTemplate redisTemplate;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        if (org.springframework.http.HttpMethod.OPTIONS.equals(exchange.getRequest().getMethod())
                || path.startsWith("/actuator")
                || path.startsWith("/api/auth")
                || path.startsWith("/api/v1/auth")
                || path.startsWith("/api/public")
                || path.contains("/users/register")
                || path.contains("/users/sync")) {
            return chain.filter(exchange);
        }

        return ReactiveSecurityContextHolder.getContext()
                .map(context -> context.getAuthentication())
                .flatMap(authentication -> {
                    if (authentication == null
                            || !authentication.isAuthenticated()
                            || !(authentication instanceof JwtAuthenticationToken)) {
                        log.debug("User is not authenticated");
                        return chain.filter(exchange);
                    }

                    String userId = authentication.getName();
                    String redisKey = REDIS_SYNC_PREFIX + userId;

                    // 1. Kiểm tra trong Redis cache trước
                    return redisTemplate.hasKey(redisKey)
                            .onErrorReturn(false) // Nếu Redis lỗi, fallback tiếp tục kiểm tra qua service
                            .flatMap(isCached -> {
                                if (Boolean.TRUE.equals(isCached)) {
                                    log.debug("User {} found in Redis cache, skipping sync", userId);
                                    return forwardRequest(exchange, chain, userId);
                                }

                                // 2. Nếu Cache miss -> gọi UserService
                                RegisterRequest registerRequest = createRegisterRequest(authentication);

                                return userService.validateUser(userId)
                                        .flatMap(exists -> {
                                            if (Boolean.TRUE.equals(exists)) {
                                                log.debug("User {} already exists in DB, saving to Redis cache", userId);
                                                return cacheUserInRedis(redisKey);
                                            }

                                            log.info("User {} does not exist, registering...", userId);
                                            return userService.registerUser(registerRequest)
                                                    .flatMap(res -> cacheUserInRedis(redisKey));
                                        })
                                        .then(Mono.defer(() -> forwardRequest(exchange, chain, userId)));
                            });
                })
                .switchIfEmpty(Mono.defer(() -> chain.filter(exchange)));
    }

    private Mono<Boolean> cacheUserInRedis(String redisKey) {
        return redisTemplate.opsForValue()
                .set(redisKey, "1", CACHE_TTL)
                .onErrorReturn(false);
    }

    /**
     * Tạo RegisterRequest từ Authentication.
     */
    private RegisterRequest createRegisterRequest(Authentication authentication) {
        RegisterRequest request = new RegisterRequest();
        String userId = authentication.getName();
        request.setKeycloakId(userId);

        if (authentication instanceof JwtAuthenticationToken jwtAuthentication) {
            var jwt = jwtAuthentication.getToken();

            String email = jwt.getClaimAsString("email");
            if (email == null || email.isBlank()) {
                String username = jwt.getClaimAsString("preferred_username");
                email = (username != null ? username : userId) + "@heybank.com";
            }

            request.setEmail(email);
            request.setFirstName(jwt.getClaimAsString("given_name"));
            request.setLastName(jwt.getClaimAsString("family_name"));
        }

        return request;
    }

    /**
     * Thêm Keycloak user ID vào request header và ghi đè an toàn
     * trước khi forward request xuống service.
     */
    private Mono<Void> forwardRequest(
            ServerWebExchange exchange,
            WebFilterChain chain,
            String userId
    ) {
        ServerHttpRequest mutatedRequest = exchange.getRequest()
                .mutate()
                .headers(headers -> headers.set("X-User-ID", userId))
                .build();

        ServerWebExchange mutatedExchange = exchange.mutate()
                .request(mutatedRequest)
                .build();

        return chain.filter(mutatedExchange);
    }
}
