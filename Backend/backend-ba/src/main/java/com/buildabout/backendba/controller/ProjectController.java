package com.buildabout.backendba.controller;

import com.buildabout.backendba.entity.Project;
import com.buildabout.backendba.entity.User;
import com.buildabout.backendba.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/getAllProjects")
    public List<Project> getAllProjects(){
        return (List<Project>) projectRepository.findAll();
    }
}
