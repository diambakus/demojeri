package orakuma.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {

	@Column(name = "street")
	private String street;

	@Column(name = "number")
	private String number;

	@Column(name = "zip")
	private String zip;

	@Column(name = "place")
	private String place;

	@Column(name = "country")
	private String country;
}
