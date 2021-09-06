package orakuma.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

import orakuma.demo.model.Address;
import orakuma.demo.model.Organization;
import orakuma.demo.model.Role;
import orakuma.demo.security.CurrentUser;
import orakuma.demo.service.OrganizationService;
import orakuma.demo.utils.Beans;
import orakuma.demo.utils.Strings;
import orakuma.demo.utils.Validation;
import orakuma.demo.utils.search.SearchResult;
import orakuma.demo.utils.search.SortDirection;

@RestController
@RequestMapping("/api/organizations")
public class OrganizationController {

	private OrganizationService organizationService;

	@Autowired
	public OrganizationController(OrganizationService organizationService) {
		this.organizationService = organizationService;
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN')")
	@GetMapping
	public ResponseEntity<?> getAll(@RequestParam(required = false) String sortBy,
			@RequestParam(defaultValue = "ASCENDING") SortDirection sortDirection,
			@RequestParam(required = false) String filter, @RequestParam(required = false) String filterBy,
			@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int pageSize) {
		List<Organization> organizations = organizationService.findAll();
		return Respond.ok(SearchResult.create(organizations, page, pageSize, sortBy, sortDirection, filter, filterBy));
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN')")
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> create(@RequestBody Organization organization) {
		if (organizationService.exists(organization))
			return Respond.invalidField("name");
		ResponseEntity<?> error = validate(organization);
		if (error != null)
			return error;
		organization = organizationService.create(organization);
		return Respond.ok(organization);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> get(@PathVariable("id") long id, @AuthenticationPrincipal CurrentUser currentUser) {
		Organization organization = organizationService.findById(id);
		if (organization == null)
			return Respond.notFound();
		if (currentUser.user.getRole() == Role.ROLE_ADMIN)
			return Respond.ok(organization);
		if (currentUser.user.getOrganization() == null || currentUser.user.getOrganization().getId() != id)
			return Respond.forbidden();
		return Respond.ok(organization);
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN') OR hasRole('ROLE_ORGANIZATION_ADMIN')")
	@PatchMapping(value = "/{id}", consumes = "application/merge-patch+json")
	public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Organization update,
			@AuthenticationPrincipal CurrentUser currentUser) {
		Organization organization = organizationService.findById(id);
		if (organization == null)
			return Respond.notFound();
		if (!currentUser.isOrganizationAdmin(id))
			return Respond.forbidden();
		Beans.populateProperties(update, organization, "name", "email", "phone", "logo", "fax", "website", "cellphone");
		if (update.getAddress() != null) {
			Address address = organization.getAddress() != null ? organization.getAddress() : new Address();
			Beans.populateProperties(update.getAddress(), address, "street", "number", "zip", "place", "country");
			organization.setAddress(address);
		}
		ResponseEntity<?> error = validate(organization);
		if (error != null)
			return error;
		organization = organizationService.update(organization);
		return Respond.ok(organization);
	}

	@PreAuthorize(value = "hasRole('ROLE_ADMIN')")
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") long id, @AuthenticationPrincipal CurrentUser currentUser) {
		Organization organization = organizationService.findById(id);
		if (organization == null)
			return Respond.notFound();
		if (!currentUser.isOrganizationAdmin(id))
			return Respond.forbidden();
		return Respond.ok(organizationService.delete(id));
	}

	private ResponseEntity<?> validate(Organization organization) {
		if (organization == null)
			return Respond.notFound();
		if (Strings.nullOrEmpty(organization.getName()))
			return Respond.missingField("name");
		if (Strings.nullOrEmpty(organization.getEmail()))
			return Respond.missingField("email");
		if (!Validation.isEmail(organization.getEmail()))
			return Respond.invalidField("email");
		return null;
	}
}
