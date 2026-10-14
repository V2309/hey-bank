package com.bank.gateway.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    /*
     * ID của user trên Keycloak.
     *
     * Giá trị này lấy từ JWT claim "sub".
     */
    @NotBlank(message = "Keycloak ID is required")
    private String keycloakId;

    private String firstName;

    private String lastName;
}