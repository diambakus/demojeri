package orakuma.demo.controller;

import java.util.Calendar;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import orakuma.demo.model.User;
import orakuma.demo.security.APISecurityCredential;
import orakuma.demo.security.APISecurityToken;
import orakuma.demo.security.CurrentUser;
import orakuma.demo.security.ResetPasswordInput;
import orakuma.demo.security.TokenSecurityService;
import orakuma.demo.service.EmailService;
import orakuma.demo.service.UserService;
import orakuma.demo.utils.Password;
import orakuma.demo.utils.Strings;

@RestController
@RequestMapping("/api")
public class EntryPointController {

	private AuthenticationManager authenticationManager;
	private UserDetailsService userDetailsService;
	private TokenSecurityService tokenSecurityService;
	private UserService userService;
	private long tokenExpirationInSec;
	private EmailService emailService;

	@Autowired
	public EntryPointController(AuthenticationManager authenticationManager, UserDetailsService userDetailsService,
			TokenSecurityService tokenSecurityService, UserService userService,
			@Value("${jwt.expiration-sec}") long tokenExpirationInSec,
			EmailService emailService) {
		this.authenticationManager = authenticationManager;
		this.userDetailsService = userDetailsService;
		this.userService = userService;
		this.tokenSecurityService = tokenSecurityService;
		this.tokenExpirationInSec = tokenExpirationInSec;
		this.emailService = emailService;
	}

	@PostMapping("/public/login")
	public ResponseEntity<?> authentication(@RequestBody APISecurityCredential credential) throws Exception {
		try {
			Authentication auth = new UsernamePasswordAuthenticationToken(credential.getUsername(),
					String.valueOf(credential.getPassword()));
			authenticationManager.authenticate(auth);
		} catch (BadCredentialsException e) {
			return Respond.invalidField("username/password");
		}

		UserDetails userDetails = userDetailsService.loadUserByUsername(credential.getUsername());
		String token = tokenSecurityService.generateToken(userDetails);
		return Respond.ok(wrapToken(token));
	}

	@GetMapping("/users/current")
	@ResponseBody
	public User getCurrentUser(@AuthenticationPrincipal final CurrentUser currentUser) {
		return currentUser.user;
	}

	@PostMapping("/users/current/logout")
	public ResponseEntity<?> doLogout(@AuthenticationPrincipal final CurrentUser currentUser,
			@RequestHeader("Authorization") String authorization) {
		return Respond.ok();
	}

	private APISecurityToken wrapToken(String token) {
		long expires = Calendar.getInstance().getTimeInMillis() + tokenExpirationInSec * 1000;
		return new APISecurityToken(token, expires);
	}

	@PostMapping("/public/reset-password")
	public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordInput input, @Value("${fred.url}") String url) {
		// always return Ok 200 to prevent attackers from finding out emails
		if (input == null || Strings.nullOrEmpty(input.email))
			return Respond.ok();
		User user = userService.findByEmail(input.email);
		if (user == null || user.getId() <= 0)
			return Respond.ok();
		String password = Password.generate();
		user = userService.updatePassword(user, password);
		String name = user.getName() != null ? user.getName() : user.getUsername();
		emailService.send("Hallo " + name + ",\n\n"
				+ "Sie haben ein neues Passwort für " + url + " angefordert.\n\n"
				+ "Ihr neues Passwort lautet: " + password + "\n\n"
				+ "Aus Sicherheitsgründen ändern Sie bitte Ihr Passwort nach der nächsten Anmeldung.\n\n"
				+ "Mit freundlichen Grüßen\n"
				+ "Das FRED Team", user.getEmail());
		return Respond.ok();
	}

}
