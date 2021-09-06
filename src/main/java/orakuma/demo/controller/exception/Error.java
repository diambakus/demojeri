package orakuma.demo.controller.exception;

public class Error {

	public String key;
	public String field;

	public Error(String key) {
		this.key = key;
	}

	public Error(String key, String field) {
		this.key = key;
		this.field = field;
	}

}
