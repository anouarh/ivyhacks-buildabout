package com.buildabout.backendba.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class VirtualTool extends Tool {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "project_tool",
            joinColumns = @JoinColumn(name = "tool_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id"))
    private List<VirtualProject> projects;

    public VirtualTool(String name, String description) {
        super(name, description);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<VirtualProject> getProjects() {
        return projects;
    }

    public void setProjects(List<VirtualProject> projects) {
        this.projects = projects;
    }
}
