package orakuma.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import orakuma.demo.model.Organization;
import orakuma.demo.repository.OrganizationRepository;

@Service
public class OrganizationService {

	private OrganizationRepository organizationRepository;

	@Autowired
	public OrganizationService(OrganizationRepository organizationRepository) {
		this.organizationRepository = organizationRepository;
	}

	public List<Organization> findAll() {
		return StreamSupport.stream(organizationRepository.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}

	public Organization findById(long id) {
		Optional<Organization> organization = organizationRepository.findById(id);
		if (!organization.isPresent())
			return null;
		return organization.get();
	}

	public Organization create(Organization organization) {
		if (organization == null)
			return null;
		return organizationRepository.save(organization);
	}

	public boolean delete(long id) {
		try {
			organizationRepository.deleteById(id);
			return true;
		} catch (Exception ioe) {
			return false;
		}
	}

	public boolean exists(Organization organization) {
		return StreamSupport.stream(findAll().spliterator(), false)
				.anyMatch(org -> organization.getId() != org.getId() && org.getName().equalsIgnoreCase(organization.getName()));
	}

	public Organization update(Organization organization) {
		return organizationRepository.save(organization);
	}
}