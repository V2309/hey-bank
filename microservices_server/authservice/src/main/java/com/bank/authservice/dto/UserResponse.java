package com.bank.authservice.dto;

import com.bank.authservice.model.UserRole;
import com.bank.authservice.model.UserStatus;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
public class UserResponse {

    private String keycloakId;
    private String email;
    private String firstName;
    private String lastName;
    private UserRole role;
    private UserStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}