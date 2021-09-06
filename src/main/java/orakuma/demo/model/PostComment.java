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
@Table(name = "posts_comments")
public class PostComment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pc_gen")
    @SequenceGenerator(name = "pc_gen", sequenceName = "pc_seq")
    private Long id;
    private String content;
    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private User author;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
}
