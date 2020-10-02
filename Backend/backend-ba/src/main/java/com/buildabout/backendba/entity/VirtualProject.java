package com.buildabout.backendba.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class VirtualProject extends Project {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @ManyToMany(mappedBy = "projects")
    private List<VirtualTool> tools;

    @ManyToMany(mappedBy = "projects")
    private List<VirtualMaterial> materials;

    public VirtualProject(String name, String description, String rating) {
        super(name, description, rating);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<VirtualTool> getTools() {
        return tools;
    }

    public void setTools(List<VirtualTool> tools) {
        this.tools = tools;
    }

    public List<VirtualMaterial> getMaterials() {
        return materials;
    }

    public void setMaterials(List<VirtualMaterial> materials) {
        this.materials = materials;
    }
}
