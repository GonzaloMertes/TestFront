package com.portfolio.ap.Repository;

import com.portfolio.ap.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository <Persona,Long>{  
}
