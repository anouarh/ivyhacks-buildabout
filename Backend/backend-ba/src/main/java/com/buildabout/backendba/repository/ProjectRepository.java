package com.buildabout.backendba.repository;

import com.buildabout.backendba.entity.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
}
