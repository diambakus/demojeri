package orakuma.demo.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import orakuma.demo.controller.exception.Error;

class Respond {

	public static ResponseEntity<?> ok() {
		return ResponseEntity.ok(Optional.empty());
	}

	public static ResponseEntity<?> ok(Object body) {
		return ResponseEntity.ok(body);
	}

	public static ResponseEntity<?> notFound() {
		return ResponseEntity.notFound().build();
	}

	public static ResponseEntity<?> forbidden() {
		return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
	}

	public static ResponseEntity<?> conflict() {
		return ResponseEntity.status(HttpStatus.CONFLICT).build();
	}

	public static ResponseEntity<?> missingField(String field) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error("missing", field));
	}

	public static ResponseEntity<?> invalidField(String field) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error("invalid", field));
	}

	public static ResponseEntity<?> ok(File file) throws IOException {
		Path path = Paths.get(file.getAbsolutePath());
		ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

		return ResponseEntity.status(HttpStatus.OK)
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=\"" + file.getName() + "\"")
				.contentLength(file.length())
				.contentType(MediaType.APPLICATION_OCTET_STREAM)
				.body(resource);
	}
}
