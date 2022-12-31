import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona ("","","");

  constructor(public personaService: PersonaService) { }
//lo que realiza el suscribe es que escucha (por decir) cuando el observable realiza un cambio 
  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data => {this.persona = data});
  }

}
