package com.buildabout.backendba.repository;

import com.buildabout.backendba.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
