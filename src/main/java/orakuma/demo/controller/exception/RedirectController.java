package orakuma.demo.controller.exception;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RedirectController {

	private static final Logger logger = LoggerFactory.getLogger(RedirectController.class);

	@RequestMapping(value = { "/{regex:\\w+}", "/**/{regex:\\w+}" })
	public Object redirecTo(HttpServletRequest request) {
		String stringURI = request.getRequestURI();
		if (stringURI != null && stringURI.length() > 0) {
			if (stringURI.startsWith("/api/") && stringURI.length() > 5) {
				logger.info(String.format("[SDE Team] the resource %s is not found.", stringURI));
				return this.getApiResourceNotFoundBody(request);
			}
			logger.info(String.format(
					"[SDE Team] the resource %s doesn't exist. The request has been forwarded to the home page.",
					stringURI));
			return "forward:/";
		}
		return null;
	}

	private ResponseEntity<String> getApiResourceNotFoundBody(HttpServletRequest request) {
		return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
	}
}