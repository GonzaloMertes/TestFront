import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newpro',
  templateUrl: './newpro.component.html',
  styleUrls: ['./newpro.component.css']
})
export class NewproComponent implements OnInit {

  nombre:string= '';
  fecha:string= '';
  descripcion:string= '';
  link:string= '';

  
  constructor(private proyectoService:ProyectosService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new proyecto (this.nombre, this.fecha ,this.descripcion, this.link);
    this.proyectoService.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
