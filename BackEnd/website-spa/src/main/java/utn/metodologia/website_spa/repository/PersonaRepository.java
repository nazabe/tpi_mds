package utn.metodologia.website_spa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import utn.metodologia.website_spa.model.Persona;

@Repository // clase que permite el acceso a datos
public interface PersonaRepository extends CrudRepository<Persona, Long>{
}
