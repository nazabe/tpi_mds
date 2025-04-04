package utn.metodologia.website_spa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import utn.metodologia.website_spa.model.Subtipo;

@Repository
public interface SubtipoRepository extends CrudRepository<Subtipo, Long> {
}
