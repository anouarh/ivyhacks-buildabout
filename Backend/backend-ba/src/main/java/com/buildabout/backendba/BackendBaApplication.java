package com.buildabout.backendba;

import com.buildabout.backendba.entity.User;
import com.buildabout.backendba.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendBaApplication {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendBaApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(){
		return args -> {
			userRepository.save(new User("Tyreek", "Hill", "thill",
					"thill@gmail.com", "+15558739", 25));
		};
	}

}
