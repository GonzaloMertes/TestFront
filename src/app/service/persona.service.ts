import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  URL = environment.URL + 'personas/';
  //URL = 'https://textback-production.up.railway.app/personas/' ;

  constructor(private httpClient:HttpClient) { }
//Un observable es, por definición, algo que uno desea observar. 
//El objetivo es ver su condición a lo largo del tiempo y recopilar los cambios que experimentaría. 
//A diferencia de las promesas, los observables pueden cambiar un número infinito de veces su valor.
 
public lista():Observable  <persona[] >{
  return this.httpClient.get< persona[] >(this.URL + 'lista');
}

public detail(id: number): Observable<persona>{
  return this.httpClient.get< persona>(this.URL + `detail/${id}`);
} 

/*public save(educacion: Educacion): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', educacion);
}*/

public update(id: number, Persona: persona): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}

/*public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}*/

}
