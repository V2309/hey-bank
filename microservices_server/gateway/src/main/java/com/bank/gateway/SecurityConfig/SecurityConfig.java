package com.bank.gateway.SecurityConfig;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springsecurityFilterChain(ServerHttpSecurity http) {
        return http
                // Tắt CSRF
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                // Cấu hình CORS để cho phép Frontend React gọi API Gateway
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                // Cấu hình quyền truy cập
                .authorizeExchange(exchange -> exchange
                        // Cho phép toàn bộ OPTIONS preflight request (CORS) đi qua mà không cần Token
                        .pathMatchers(HttpMethod.OPTIONS).permitAll()
                        // Cho phép actuator kiểm tra healthcheck
                        .pathMatchers("/actuator/**").permitAll()
                        // Cho phép các endpoint auth / public (nếu có)
                        .pathMatchers("/api/auth/**", "/api/v1/auth/**", "/api/public/**").permitAll()
                        // Tất cả endpoint còn lại bắt buộc phải có Token JWT
                        .anyExchange().authenticated()
                )
                // Cấu hình Gateway hoạt động như OAuth2 Resource Server
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(Customizer.withDefaults())
                )
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(Collections.singletonList("http://localhost:*"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-User-ID", "Accept", "Origin"));
        config.setAllowCredentials(true);
        config.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}