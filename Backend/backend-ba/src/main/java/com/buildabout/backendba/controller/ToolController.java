package com.buildabout.backendba.controller;

import com.buildabout.backendba.entity.Tool;
import com.buildabout.backendba.entity.User;
import com.buildabout.backendba.repository.ToolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tools")
public class ToolController {

    @Autowired
    private ToolRepository toolRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllTools")
    public Iterable<Tool> getAllTools(){
        return toolRepository.findAll();
    }
}
