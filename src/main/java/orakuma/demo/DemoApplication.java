package orakuma.demo;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.databind.ObjectMapper;

import orakuma.demo.model.Organization;
import orakuma.demo.model.Role;
import orakuma.demo.model.User;
import orakuma.demo.repository.OrganizationRepository;
import orakuma.demo.repository.UserRepository;
import orakuma.demo.utils.Password;

@SpringBootApplication
public class DemoApplication extends SpringBootServletInitializer {

	private static final Logger logger = LoggerFactory.getLogger(DemoApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner initialiseData(
			@Value("${demo.env}") String env,
			OrganizationRepository organizationRepo,
			UserRepository userRepo,
			PasswordEncoder encoder) {
		return arguments -> {
			switch (env) {
			case "prod":
				initProd(userRepo, encoder);
				break;
			case "dev":
				initDev(organizationRepo, userRepo, encoder);
				break;
			}
		};
	}

	private void initProd(UserRepository userRepo, PasswordEncoder encoder) {
		for (User user : userRepo.findAll())
			if (user.getRole() == Role.ROLE_ADMIN)
				return;
		User user = new User();
		user.setUsername("admin");
		user.setName("Administrator");
		user.setEmail("admin@company.com");
		user.setRole(Role.ROLE_ADMIN);
		String password = Password.generate();
		logger.info("Created new admin user with password " + password);
		user.setPassword(encoder.encode(password));
		userRepo.save(user);
	}

	private void initDev(OrganizationRepository organizationRepo, UserRepository userRepo, 
			PasswordEncoder encoder) throws IOException {
		DevData data = new ObjectMapper().readValue(getClass().getResourceAsStream("/dev-data.json"), DevData.class);
		for (Organization organization : data.organizations) {
			organizationRepo.save(organization);
		}
		for (User user : data.users) {
			user.setPassword(encoder.encode(user.getPassword()));
			userRepo.save(user);
		}
	}

	private static class DevData {

		public Organization[] organizations;
		public User[] users;
	}

}
