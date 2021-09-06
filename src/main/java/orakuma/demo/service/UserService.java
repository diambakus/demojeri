package orakuma.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import orakuma.demo.model.Role;
import orakuma.demo.model.User;
import orakuma.demo.repository.UserRepository;
import orakuma.demo.security.APISecurityCredential;
import orakuma.demo.utils.Password;
import orakuma.demo.utils.Strings;

@Service
public class UserService {

	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder;

	public UserService() {
	}

	@Autowired
	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		Password.setPasswordEncoder(this.passwordEncoder);
	}

	public User findById(long id) {
		Optional<User> user = userRepository.findById(id);
		if (!user.isPresent())
			return null;
		return user.get();
	}

	public User findByUsername(String username) {
		Optional<User> user = userRepository.findByUsername(username);
		if (!user.isPresent())
			return null;
		return user.get();
	}

	public User findByEmail(String email) {
		Optional<User> user = userRepository.findByEmail(email);
		if (!user.isPresent())
			return null;
		return user.get();
	}

	public APISecurityCredential create(User user) {
		if (user == null)
			return null;
		APISecurityCredential generatedCredential = new APISecurityCredential();
		if (Strings.nullOrEmpty(user.getUsername())  || Strings.nullOrEmpty(user.getEmail()))
			return null;
		// Password is generated automatically
		generatedCredential.setPassword(Password.generate().toCharArray());
		user.setPassword(Password.encode(String.valueOf(generatedCredential.getPassword())));
		generatedCredential.setUsername(user.getUsername());
		userRepository.save(user);
		return generatedCredential;
	}

	public User update(User user) {
		if (user == null)
			return null;
		return userRepository.save(user);
	}

	public User updatePassword(User user, String newPassword) {
		if (user == null)
			return null;
		user.setPassword(Password.encode(newPassword));
		return userRepository.save(user);
	}

	public List<User> users() {
		return StreamSupport.stream(userRepository.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}

	public boolean delete(long id) {
		try {
			userRepository.deleteById(id);
		} catch (EmptyResultDataAccessException eException) {
			return false;
		}
		return true;
	}

	public List<User> findByOrgId(long orgId) {
		return StreamSupport.stream(users().spliterator(), false)
				.filter(user -> user.getOrganization() != null && user.getOrganization().getId() == orgId)
				.collect(Collectors.toList());
	}

	public List<Long> findOrgAdmins(long orgId) {
		Iterable<User> users = findByOrgId(orgId);
		return StreamSupport.stream(users.spliterator(), false)
				.filter(user -> user.getRole() == Role.ROLE_ORGANIZATION_ADMIN)
				.map(user -> user.getId()).collect(Collectors.toList());
	}

	public boolean exists(String username) {
		return StreamSupport.stream(users().spliterator(), false)
				.anyMatch(user -> user.getUsername().equalsIgnoreCase(username));
	}
}