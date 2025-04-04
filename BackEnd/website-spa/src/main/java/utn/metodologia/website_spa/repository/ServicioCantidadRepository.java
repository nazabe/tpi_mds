package utn.metodologia.website_spa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import utn.metodologia.website_spa.model.servicio_cantidad;

@Repository
public interface ServicioCantidadRepository extends CrudRepository<servicio_cantidad, Long> {
}
