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
@Table(name = "departments")
public class Department implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dep_gen")
    @SequenceGenerator(name = "dep_gen", sequenceName = "dep_seq")
    private Long id;
    private String name;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
}
