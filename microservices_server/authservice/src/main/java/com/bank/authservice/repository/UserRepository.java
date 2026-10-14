package com.bank.authservice.repository;

import com.bank.authservice.model.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(String email);

    Optional<User> findByEmail(@NotBlank(message = "Email is required") @Email(message = "invalid email format") String email);
}
