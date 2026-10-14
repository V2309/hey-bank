package com.bank.authservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank(message = "Email is required")
    @Email(message = "invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6 , message ="Password must be have at least 6 characters")
    private String password;

    private String keycloakId;

    private String firstName;
    private String lastName;
}
