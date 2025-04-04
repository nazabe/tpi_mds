package utn.metodologia.website_spa.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(
			strategy = GenerationType.IDENTITY
	)
	@Column(name = "id")
	private Long id;
	@Column(name = "password", unique = true)
	private String pass;
	@Column(name = "email", unique = true)
	private String email;
	@OneToOne
	@JoinColumn(name = "persona_id")
	private Persona perso;
	
	public User(String pass, String email, Persona perso) {
		this.pass = pass;
		this.email = email;
		this.perso = perso;
	}
	
	//public User() {}
	
	
}
