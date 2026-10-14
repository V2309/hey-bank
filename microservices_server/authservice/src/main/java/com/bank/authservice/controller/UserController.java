package com.bank.authservice.controller;


import com.bank.authservice.dto.KeycloakUserSyncRequest;
import com.bank.authservice.dto.UserResponse;
import com.bank.authservice.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController {// Service xử lý các nghiệp vụ liên quan đến người dùng
    private UserService userService;

    // Lấy thông tin hồ sơ người dùng theo ID
    @GetMapping("/{userId}")
    public ResponseEntity<UserResponse> getUserProfile(@PathVariable String userId) {
        return ResponseEntity.ok(userService.getUserProfile(userId));
    }

    // Đồng bộ thông tin người dùng từ Keycloak vào hệ thống
    @PostMapping("/sync")
    public ResponseEntity<UserResponse> syncKeycloakUser(@Valid @RequestBody KeycloakUserSyncRequest request) {
        return ResponseEntity.ok(userService.syncKeycloakUser(request));
    }

    // Kiểm tra người dùng có tồn tại trong hệ thống hay không
    @GetMapping("/{userId}/validate")
    public ResponseEntity<Boolean> validateUser(@PathVariable String userId) {
        return ResponseEntity.ok(userService.existByUserId(userId));
    }
}
