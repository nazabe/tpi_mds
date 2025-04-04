package utn.metodologia.website_spa.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name = "persona")
public class Persona {
	@Id
	@GeneratedValue(
			strategy = GenerationType.IDENTITY
	)
	@Column(name = "id")
	private Long id;
	@Column(name = "nombre", nullable = false , length = 10)
	private String nombre;
	@Column(name = "apellido", nullable = false , length = 10)
	private String apellido;
	@Column(name = "dni", nullable = false, length = 8, unique = true)
	private int dni;
	@OneToMany(mappedBy = "perso", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Numero> listaNumeros = new HashSet<>();
	
	
	public Persona(String nombre, String apellido, int dni) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
	}
	

	public int getDni() {
		return dni;
	}


	public void setDni(int dni) {
		this.dni = dni;
	}


	public Set<Numero> getListaNumeros() {
		return listaNumeros;
	}


	public void setListaNumeros(Set<Numero> listaNumeros) {
		this.listaNumeros = listaNumeros;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	//public Persona() {}
	
	
	@Override
	public String toString() {
        return "Persona{" +
               "id=" + id +
               ", nombre='" + nombre + '\'' +
               ", apellido='" + apellido + '\'' +
               '}'; // Excluye la contraseña por seguridad
    }
}
