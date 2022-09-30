import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Country } from 'src/app/interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'
  //inyectamos el servicio en el constructor
  constructor( private http: HttpClient ) { }

  //es un metodo que recibe un término y retorna un observable
  //con un arreglo de countries
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }
}