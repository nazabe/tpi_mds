package utn.metodologia.website_spa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import utn.metodologia.website_spa.model.tipo_servicio;

@Repository
public interface TipoServicioRepository extends CrudRepository<tipo_servicio, Long> {
}
