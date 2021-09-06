package orakuma.demo.repository;

import orakuma.demo.model.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
    Optional<Employee> findByName(String name);
}
