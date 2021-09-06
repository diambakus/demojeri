package orakuma.demo.controller.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<Error> handleUserNotFoundException(UserNotFoundException excep) {
		Error response = new Error("missing", "username");
		return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
	}
}
