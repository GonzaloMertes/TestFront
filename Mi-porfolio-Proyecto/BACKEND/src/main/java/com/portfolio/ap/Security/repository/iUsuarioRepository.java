/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.ap.Security.repository;

import com.portfolio.ap.Security.Entity.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Gonzalo Mertes
 */
public interface iUsuarioRepository extends JpaRepository<Usuario, Integer>{
    Optional<Usuario> findByNombreUsuario(String NombreUsuario);
    //corroboramos si existe el nombre de usuario y el email
    boolean existsByNombreUsuario(String nombreUsuario);
    boolean existsByEmail (String email);
}
