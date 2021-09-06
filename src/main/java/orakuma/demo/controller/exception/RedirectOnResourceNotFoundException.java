package orakuma.demo.controller.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

//@ControllerAdvice
//public class RedirectOnResourceNotFoundException {
//	@ExceptionHandler(value = NoHandlerFoundException.class)
//	public Object handleStaticResourceNotFound(final NoHandlerFoundException ex, HttpServletRequest req,
//			RedirectAttributes redirectAttributes) {
//		if (req.getRequestURI().startsWith("/api/") && (req.getRequestURI().length() > 5))
//			return this.getApiResourceNotFoundBody(ex, req);
//		else {
//			redirectAttributes.addFlashAttribute("errorMessage", "My Custom error message");
//			return "forward:/";
//		}
//	}
//
//	private ResponseEntity<String> getApiResourceNotFoundBody(NoHandlerFoundException ex, HttpServletRequest req) {
//		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
//	}
//}
