import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  pro: proyecto[] = [];
  
  constructor( private tokenService:TokenService, private ProyectosService:ProyectosService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.ProyectosService.lista().subscribe(data => { this.pro = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.ProyectosService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  

}
