import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http:HttpClient) { }
//Un observable es, por definición, algo que uno desea observar. El objetivo es ver su condición a lo largo del tiempo y recopilar los cambios que experimentaría. A diferencia de las promesas, los observables pueden cambiar un número infinito de veces su valor.
 
  public getPersonas(): Observable <persona> {
    return this.http.get<persona> (this.URL+ 'traer/perfil');
  }
}
