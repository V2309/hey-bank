package com.bank.authservice.service;


import com.bank.authservice.dto.KeycloakUserSyncRequest;
import com.bank.authservice.dto.RegisterRequest;
import com.bank.authservice.dto.UserResponse;
import com.bank.authservice.exception.UserNotFoundException;
import com.bank.authservice.model.User;
import com.bank.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    /**
     * Đăng ký người dùng vào database.
     * <p>
     * Nếu email đã tồn tại thì trả về thông tin user hiện tại.
     */
    @Transactional
    public UserResponse register(RegisterRequest request) {

        return repository.findByEmail(request.getEmail())
                .map(this::toResponse)
                .orElseGet(() -> {

                    User user = createUser(
                            request.getKeycloakId(),
                            request.getEmail(),
                            request.getFirstName(),
                            request.getLastName()
                    );

                    User savedUser = repository.save(user);

                    return toResponse(savedUser);
                });
    }

    /**
     * Đồng bộ thông tin người dùng từ Keycloak vào database.
     * <p>
     * Nếu Keycloak ID đã tồn tại:
     * -> cập nhật user hiện tại.
     * <p>
     * Nếu Keycloak ID chưa tồn tại nhưng email đã tồn tại:
     * -> xóa user cũ và tạo user mới với Keycloak ID mới.
     * <p>
     * Nếu cả Keycloak ID và email đều chưa tồn tại:
     * -> tạo user mới.
     */
    @Transactional
    public UserResponse syncKeycloakUser(KeycloakUserSyncRequest request) {

        // Tìm user theo Keycloak ID
        return repository.findById(request.getKeycloakId())
                .map(existingUser -> {

                    // User đã tồn tại -> cập nhật thông tin
                    existingUser.setEmail(request.getEmail());
                    existingUser.setFirstName(request.getFirstName());
                    existingUser.setLastName(request.getLastName());

                    User updatedUser = repository.save(existingUser);

                    return toResponse(updatedUser);
                })
                .orElseGet(() -> {

                    /*
                     * Keycloak ID chưa tồn tại.
                     *
                     * Kiểm tra email có đang thuộc về user khác hay không.
                     */
                    repository.findByEmail(request.getEmail())
                            .ifPresent(oldUser -> {

                                log.info(
                                        "Removing old user with id {} before syncing Keycloak user {}",
                                        oldUser.getId(),
                                        request.getKeycloakId()
                                );

                                repository.delete(oldUser);

                                /*
                                 * Đảm bảo DELETE được thực thi trước
                                 * khi INSERT user mới có cùng email.
                                 */
                                repository.flush();
                            });

                    // Tạo user mới
                    User newUser = createUser(
                            request.getKeycloakId(),
                            request.getEmail(),
                            request.getFirstName(),
                            request.getLastName()
                    );

                    User savedUser = repository.save(newUser);

                    return toResponse(savedUser);
                });
    }

    /**
     * Lấy thông tin profile của user theo ID.
     */
    @Transactional(readOnly = true)
    public UserResponse getUserProfile(String userId) {

        User user = repository.findById(userId)
                .orElseThrow(() ->
                        new UserNotFoundException(
                                "User not found with id: " + userId
                        )
                );

        return toResponse(user);
    }

    /**
     * Kiểm tra user có tồn tại trong database hay không.
     * <p>
     * API này thường được API Gateway hoặc service khác gọi.
     */
    @Transactional(readOnly = true)
    public boolean existByUserId(String userId) {

        log.info(
                "Calling user validation API for user id: {}",
                userId
        );

        return repository.existsById(userId);
    }

    /**
     * Tạo User Entity từ thông tin request.
     */
    private User createUser(
            String keycloakId,
            String email,
            String firstName,
            String lastName
    ) {

        User user = new User();

        // Keycloak sub được sử dụng làm primary key
        user.setId(keycloakId);

        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);

        return user;
    }

    /**
     * Chuyển User Entity thành UserResponse DTO.
     * <p>
     * Không trả trực tiếp Entity ra ngoài API.
     */
    private UserResponse toResponse(User user) {

        UserResponse response = new UserResponse();

        response.setKeycloakId(user.getId());
        response.setEmail(user.getEmail());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setRole(user.getRole());
        response.setStatus(user.getStatus());
        response.setCreatedAt(user.getCreatedAt());
        response.setUpdatedAt(user.getUpdatedAt());

        return response;
    }
}
