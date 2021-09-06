package orakuma.demo.repository;

import org.springframework.stereotype.Repository;

import orakuma.demo.model.Organization;

@Repository
public interface OrganizationRepository extends BaseRepository<Organization, Long> {

}