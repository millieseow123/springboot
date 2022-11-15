package com.example.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project.models.UserLogin;
import com.example.project.repositories.LoginRepository;

@Service
public class LoginService {
    
    @Autowired
    private LoginRepository loginRepo;
    
    public Optional<UserLogin> checkLoginDetails(String email, String password) {
        return loginRepo.findUserByEmailAndPassword(email, password);
    }
}
