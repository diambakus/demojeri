package orakuma.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "organizations")
public class Organization implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1128572054634030032L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "org_gen")
	@SequenceGenerator(name = "org_gen", sequenceName = "org_seq")
	private long id;

	@Column(name = "name")
	private String name;

	@Lob
	@Column(name = "logo")
	private byte[] logo;

	@Column(name = "address")
	@Embedded
	private Address address;

	@Column(name = "email")
	private String email;

	@Column(name = "phone")
	private String phone;

	@Column(name = "fax")
	private String fax;

	@Column(name = "website")
	private String website;
	
	@Column(name = "cellphone")
	private String cellphone;
}