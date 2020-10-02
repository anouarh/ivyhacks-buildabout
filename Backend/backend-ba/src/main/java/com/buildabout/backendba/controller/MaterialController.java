package com.buildabout.backendba.controller;

import com.buildabout.backendba.entity.Material;
import com.buildabout.backendba.entity.Tool;
import com.buildabout.backendba.repository.MaterialRepository;
import com.buildabout.backendba.repository.ToolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/materials")
public class MaterialController {

    @Autowired
    private MaterialRepository materialRepository;

    @GetMapping("/getAllMaterials")
    public Iterable<Material> getAllMaterials(){
        return materialRepository.findAll();
    }

}
