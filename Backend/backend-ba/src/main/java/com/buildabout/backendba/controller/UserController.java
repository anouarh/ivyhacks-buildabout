package com.buildabout.backendba.controller;

import com.buildabout.backendba.entity.User;
import com.buildabout.backendba.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllUsers")
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

}
