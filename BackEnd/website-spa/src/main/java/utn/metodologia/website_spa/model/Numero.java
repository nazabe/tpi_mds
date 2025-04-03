package utn.metodologia.website_spa.model;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "numero")
public class Numero {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "numero", nullable = false, length = 10)
	private int numero;
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "persona_id")
	private Persona perso;
	
	public Numero(int numero, Persona perso) {
		this.numero = numero; 
		this.perso = perso;
	}
	
	public Numero() {}
	
}
