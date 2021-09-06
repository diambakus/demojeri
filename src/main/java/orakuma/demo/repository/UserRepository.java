package orakuma.demo.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import orakuma.demo.model.User;

@Repository
public interface UserRepository extends BaseRepository<User, Long> {
	Optional<User> findByUsername(String username);
	Optional<User> findByEmail(String email);
}
