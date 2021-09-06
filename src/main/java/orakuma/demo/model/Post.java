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
@Table(name = "posts")
public class Post implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_gen")
    @SequenceGenerator(name = "post_gen", sequenceName = "post_seq")
    private Long id;
    private String title;
    private String content;
    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private User author;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
}
