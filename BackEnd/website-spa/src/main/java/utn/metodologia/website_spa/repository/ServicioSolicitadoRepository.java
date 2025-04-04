package utn.metodologia.website_spa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import utn.metodologia.website_spa.model.servicio_solicitado;

@Repository
public interface ServicioSolicitadoRepository extends CrudRepository<servicio_solicitado, Long> {
}
