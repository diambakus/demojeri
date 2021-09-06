package orakuma.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employees")
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employee_gen")
    @SequenceGenerator(name = "employee_gen", sequenceName = "employee_seq")
    private Long id;
    private String employeeId;
    private String name;
    private Double salary;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    private String occupation;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
}
