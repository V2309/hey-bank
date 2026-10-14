package com.bank.gateway.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    // WebClient dùng để gọi API của USER-SERVICE
    private final WebClient userServiceWebClient;

    /**
     * Kiểm tra user có tồn tại trong USER-SERVICE hay không.
     *
     * @param userId ID của user
     * @return Mono<Boolean>
     * true  -> user tồn tại
     * false -> user chưa tồn tại
     */
    public Mono<Boolean> validateUser(String userId) {

        log.info(
                "Calling user validation API for user id: {}",
                userId
        );

        return userServiceWebClient
                .get()

                // GET /api/v1/users/{userId}/validate
                .uri(
                        "/api/v1/users/{userId}/validate",
                        userId
                )

                // Thực hiện HTTP request
                .retrieve()

                // Response body: true / false
                .bodyToMono(Boolean.class)

                // Xử lý HTTP error
                .onErrorResume(
                        WebClientResponseException.class,
                        e -> {

                            /*
                             * 404 = User chưa tồn tại.
                             *
                             * Đây không nên được xem là exception
                             * đối với flow auto-register.
                             *
                             * Trả false để Filter biết rằng
                             * cần tạo user.
                             */
                            if (e.getStatusCode()
                                    == HttpStatus.NOT_FOUND) {

                                log.info(
                                        "User {} does not exist",
                                        userId
                                );

                                return Mono.just(false);
                            }

                            // 400 = Request không hợp lệ
                            if (e.getStatusCode()
                                    == HttpStatus.BAD_REQUEST) {

                                return Mono.error(
                                        new RuntimeException(
                                                "Invalid request for user: "
                                                        + userId
                                        )
                                );
                            }

                            // Các HTTP error khác
                            return Mono.error(
                                    new RuntimeException(
                                            "Unexpected error from USER-SERVICE: "
                                                    + e.getMessage()
                                    )
                            );
                        }
                );
    }

    /**
     * Đăng ký user vào USER-SERVICE.
     *
     * @param request thông tin user cần đăng ký
     * @return Mono<UserResponse> thông tin user sau khi tạo
     */
    public Mono<UserResponse> registerUser(
            RegisterRequest request
    ) {

        log.info(
                "Calling user registration API for email: {}",
                request.getEmail()
        );

        return userServiceWebClient
                .post()

                .uri("/api/v1/users/sync")

                // Gửi RegisterRequest dưới dạng JSON
                .bodyValue(request)

                // Thực hiện HTTP request
                .retrieve()

                // Convert response JSON -> UserResponse
                .bodyToMono(UserResponse.class)

                // Xử lý HTTP error
                .onErrorResume(
                        WebClientResponseException.class,
                        e -> {

                            // 400 = Request không hợp lệ
                            if (e.getStatusCode()
                                    == HttpStatus.BAD_REQUEST) {

                                return Mono.error(
                                        new RuntimeException(
                                                "Bad request: "
                                                        + e.getMessage()
                                        )
                                );
                            }

                            /*
                             * 409 = User đã tồn tại.
                             *
                             * Có thể xảy ra khi 2 request cùng lúc
                             * đều phát hiện user chưa tồn tại
                             * rồi cùng gọi register.
                             * Trả về UserResponse hợp lệ để luồng tiếp tục thành công.
                             */
                            if (e.getStatusCode()
                                    == HttpStatus.CONFLICT) {

                                log.warn(
                                        "User already exists (409 Conflict): {}",
                                        request.getKeycloakId()
                                );

                                UserResponse fallbackResponse = new UserResponse();
                                fallbackResponse.setKeycloakId(request.getKeycloakId());
                                fallbackResponse.setEmail(request.getEmail());
                                fallbackResponse.setFirstName(request.getFirstName());
                                fallbackResponse.setLastName(request.getLastName());
                                return Mono.just(fallbackResponse);
                            }

                            // 500 = USER-SERVICE gặp lỗi
                            if (e.getStatusCode()
                                    == HttpStatus.INTERNAL_SERVER_ERROR) {

                                return Mono.error(
                                        new RuntimeException(
                                                "USER-SERVICE internal server error"
                                        )
                                );
                            }

                            // Các HTTP error khác
                            return Mono.error(
                                    new RuntimeException(
                                            "Unexpected error from USER-SERVICE: "
                                                    + e.getMessage()
                                    )
                            );
                        }
                );
    }
}

