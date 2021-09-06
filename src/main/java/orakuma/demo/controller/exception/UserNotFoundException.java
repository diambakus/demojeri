package orakuma.demo.controller.exception;

public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	public long id;
	public String username;

	public UserNotFoundException(String username) {
		this.username = username;
	}

	public UserNotFoundException(long id) {
		this.id = id;
	}
}
