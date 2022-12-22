
package com.portfolio.ap.Service;

import com.portfolio.ap.Interface.IPersonaService;
import com.portfolio.ap.Repository.IPersonaRepository;
import com.portfolio.ap.entity.Persona;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

//llamamos al metodo service
@Service 
public class ImpPersonaService implements IPersonaService{
//@Autowired permite resolver la inyección de dependencias de los siguiente modos. En el constructor de la clase. En un atributo. En un método setter.
    @Autowired IPersonaRepository ipersonaRepository;
//uando se hace sobreescritura de un método en Java, se usa la anotación @Override
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona=ipersonaRepository.findAll() ;
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
}
