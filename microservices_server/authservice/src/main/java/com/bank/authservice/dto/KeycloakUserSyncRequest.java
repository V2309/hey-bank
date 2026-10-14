package com.bank.authservice.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class KeycloakUserSyncRequest {

    @NotBlank(message = "Email is required")
    @Email(message = "invalid email format")
    private String email;

    @NotBlank(message = "Keycloak ID is required")
    private String keycloakId;

    private String firstName;
    private String lastName;
}
