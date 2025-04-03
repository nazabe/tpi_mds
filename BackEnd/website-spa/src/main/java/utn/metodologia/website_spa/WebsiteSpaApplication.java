package utn.metodologia.website_spa;

import java.util.Optional;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import utn.metodologia.website_spa.model.Numero;
import utn.metodologia.website_spa.model.Persona;
import utn.metodologia.website_spa.model.User;
import utn.metodologia.website_spa.repository.NumeroRepository;
import utn.metodologia.website_spa.repository.PersonaRepository;
import utn.metodologia.website_spa.repository.UserRepository;

@SpringBootApplication
public class WebsiteSpaApplication {

    private final PersonaRepository personaRepository;

    WebsiteSpaApplication(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

	public static void main(String[] args) {
		SpringApplication.run(WebsiteSpaApplication.class, args);
	}
	
	@Bean
	CommandLineRunner commandLineRunner(
			PersonaRepository perRepo,
			UserRepository userRepo,
			NumeroRepository numRepo
			) {
		return args -> {
			Persona perso1 = perRepo.save(new Persona("meme", "mama", 12345678));
			User usuario = userRepo.save(new User("jaja", "jeje", perso1));
			Numero numero1 = numRepo.save(new Numero(1234567890, perso1));
			Numero numero2 = numRepo.save(new Numero(12345, perso1));
			perso1.setListaNumeros(Set.of(numero1, numero2));
			Persona perso = perRepo.save(perso1);
			System.out.println(perso.toString());
		};
	}

}
