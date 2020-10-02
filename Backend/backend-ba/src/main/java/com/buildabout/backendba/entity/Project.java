package com.buildabout.backendba.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private Type type;

    @Enumerated(EnumType.STRING)
    private Rating rating;

    @ManyToMany(mappedBy = "projects")
    @JsonIgnore
    private Set<Tool> tools;

    @ManyToMany(mappedBy = "projectsMaterial")
    @JsonIgnore
    private Set<Material> materials;

    @ManyToOne
    @JoinColumn(name = "user", nullable=false)
    private User user;

    public Project() {
    }

    public Project(String name, String description, Type type, Rating rating,
                   Set<Tool> tools, Set<Material> materials, User user) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.rating = rating;
        this.tools = tools;
        this.materials = materials;
        this.user = user;
    }

    public Project(String name, String description, Type type, Rating rating, User user) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.rating = rating;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public Set<Tool> getTools() {
        return tools;
    }

    public void setTools(Set<Tool> tools) {
        this.tools = tools;
    }

    public Set<Material> getMaterials() {
        return materials;
    }

    public void setMaterials(Set<Material> materials) {
        this.materials = materials;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
