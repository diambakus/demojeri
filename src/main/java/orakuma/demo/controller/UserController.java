package orakuma.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import orakuma.demo.model.Role;
import orakuma.demo.model.User;
import orakuma.demo.security.CurrentUser;
import orakuma.demo.service.OrganizationService;
import orakuma.demo.service.UserService;
import orakuma.demo.utils.Beans;
import orakuma.demo.utils.Collections;
import orakuma.demo.utils.Maps;
import orakuma.demo.utils.Password;
import orakuma.demo.utils.Strings;
import orakuma.demo.utils.Validation;
import orakuma.demo.utils.search.SearchResult;
import orakuma.demo.utils.search.SortDirection;

@RestController
@RequestMapping("/api/users")
public class UserController {

	private UserService userService;
	private OrganizationService organizationService;

	@Autowired
	public UserController(UserService userService, OrganizationService organizationService) {
		this.userService = userService;
		this.organizationService = organizationService;
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN') OR hasRole('ROLE_ORGANIZATION_ADMIN')")
	@PostMapping
	public ResponseEntity<?> create(@RequestBody User user, @AuthenticationPrincipal CurrentUser currentUser) {
		if (userService.exists(user.getUsername()))
			return Respond.invalidField("username");
		if (currentUser.user.getRole() == Role.ROLE_ORGANIZATION_ADMIN)
			user.setOrganization(currentUser.user.getOrganization());
		ResponseEntity<?> error = validate(user);
		if (error != null)
			return error;
		userService.create(user);
		return Respond.ok();
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN') OR hasRole('ROLE_ORGANIZATION_ADMIN')")
	@GetMapping
	public ResponseEntity<?> getAllUsers(@AuthenticationPrincipal CurrentUser currentUser,
			@RequestParam(required = false) String sortBy,
			@RequestParam(defaultValue = "ASCENDING") SortDirection sortDirection,
			@RequestParam(required = false) String filter,
			@RequestParam(required = false) String filterBy,
			@RequestParam(defaultValue = "1") int page,
			@RequestParam(defaultValue = "10") int pageSize) {
		List<User> users = currentUser.user.getRole() == Role.ROLE_ORGANIZATION_ADMIN
				? userService.findByOrgId(currentUser.user.getOrganization().getId())
				: userService.users();
		List<Map<String, Object>> clientUsers = Collections.map(users, this::map);
		return Respond.ok(SearchResult.create(clientUsers, page, pageSize, sortBy, sortDirection, filter, filterBy));
	}

	@GetMapping(value = "/{username}")
	public ResponseEntity<?> get(@PathVariable("username") String username,
			@AuthenticationPrincipal CurrentUser currentUser) {
		User user = userService.findByUsername(username);
		if (user == null)
			return Respond.notFound();
		if (!currentUser.isUserAdminFor(user))
			return Respond.forbidden();
		return Respond.ok(map(user));
	}

	@PatchMapping(value = "/{username}", consumes = "application/merge-patch+json")
	public ResponseEntity<?> update(@RequestBody User update,
			@PathVariable("username") String username, @AuthenticationPrincipal CurrentUser currentUser) {
		User user = userService.findByUsername(username);
		if (user == null)
			return Respond.notFound();
		if (!currentUser.isUserAdminFor(user))
			return Respond.forbidden();
		Beans.populateProperties(update, user, "name", "email", "role", "organization");
		ResponseEntity<?> error = validate(user);
		if (error != null)
			return error;
		user = userService.update(user);
		return Respond.ok(map(user));
	}

	@PatchMapping(value = "/{username}/password", consumes = "application/merge-patch+json")
	public ResponseEntity<?> updatePassword(@PathVariable("username") String username,
			@RequestBody Map<String, Object> fields, @AuthenticationPrincipal CurrentUser currentUser) {
		User user = userService.findByUsername(username);
		if (user == null)
			return Respond.notFound();
		if (!currentUser.isUserAdminFor(user))
			return Respond.forbidden();
		String newPassword = getString(fields, "newPassword");
		String newPasswordConfirmation = getString(fields, "newPasswordConfirmation");
		if (!Password.isValid(newPassword))
			return Respond.invalidField("newPassword");
		if (!Strings.nullOrEqual(newPassword, newPasswordConfirmation))
			return Respond.invalidField("newPasswordConfirmation");
		user = userService.updatePassword(user, newPassword);
		return Respond.ok();
	}

	private String getString(Map<String, Object> map, String field) {
		if (!map.containsKey(field))
			return null;
		Object value = map.get(field);
		if (value == null)
			return null;
		return value.toString();
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN') OR hasRole('ROLE_ORGANIZATION_ADMIN')")
	@DeleteMapping(value = "/{username}")
	public ResponseEntity<?> delete(@PathVariable("username") String username,
			@AuthenticationPrincipal CurrentUser currentUser) {
		User user = userService.findByUsername(username);
		boolean sameUser = username.equals(currentUser.getUsername());
		if (!currentUser.isUserAdminFor(user) || sameUser)
			return Respond.forbidden();
		if (user == null || !userService.delete(user.getId()))
			return Respond.notFound();
		return Respond.ok();
	}

	private Map<String, Object> map(User user) {
		Map<String, Object> map = Maps.from(user);
		Maps.remove(map, "password");
		Maps.put(map, "organization", Maps.partial(user.getOrganization(), "id", "name"));
		return map;
	}

	private ResponseEntity<?> validate(User user) {
		if (user == null)
			return Respond.notFound();
		if (Strings.nullOrEmpty(user.getUsername()))
			return Respond.missingField("username");
		if (!Validation.isUsername(user.getUsername()))
			return Respond.invalidField("username");
		if (Strings.nullOrEmpty(user.getName()))
			return Respond.missingField("name");
		if (Strings.nullOrEmpty(user.getEmail()))
			return Respond.missingField("email");
		if (!Validation.isEmail(user.getEmail()))
			return Respond.invalidField("email");
		if (user.getRole() == null)
			return Respond.missingField("role");
		if (user.getRole() != Role.ROLE_ADMIN && user.getOrganization() == null)
			return Respond.missingField("organization");
		if (user.getOrganization() != null && organizationService.findById(user.getOrganization().getId()) == null)
			return Respond.invalidField("organization");
		return null;
	}
}