package com.buildabout.backendba;

import com.buildabout.backendba.entity.*;
import com.buildabout.backendba.repository.MaterialRepository;
import com.buildabout.backendba.repository.UserRepository;
import com.buildabout.backendba.repository.ProjectRepository;
import com.buildabout.backendba.repository.ToolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendBaApplication {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ToolRepository toolRepository;

	@Autowired
	private MaterialRepository materialRepository;

	@Autowired
	private ProjectRepository projectRepository;

	public BackendBaApplication() {
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendBaApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(){
		return args -> {
			userRepository.save(new User("Tyreek", "Hill", "thill",
					"thill@gmail.com", "+15558739", 25));

			toolRepository.save(new Tool("Hammer", "Used to hammer things...", Type.PHYSICAL));

			Material material1 = new Material("Wood", "Blah Blah...", Type.PHYSICAL);
			materialRepository.save(material1);

			Project proj1 = new Project("Building a wood robot", "blah blah etc", Type.PHYSICAL, Rating.INTERMEDIATE );
			projectRepository.save(proj1);

		};
	}

}
