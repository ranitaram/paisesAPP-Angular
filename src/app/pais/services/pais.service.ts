import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs'
import { Country } from 'src/app/interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'

  get httpParams(){
    return  new HttpParams()
    //primero la llave, y luego su valor
    //y esto es un objeto
    .set('fields', 'name,capital,cca2,flags,population');
  }

  //inyectamos el servicio en el constructor
  constructor( private http: HttpClient ) { }

  //es un metodo que recibe un término y retorna un observable
  //con un arreglo de countries
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const link = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(link, {params: this.httpParams});
  }

  //sin los [] en el Country, solo regresamos 1 pais y 
  // con [] regresamos un arreglo de paises 
  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{

    // //para configurar los parametro del url, esto dependera del api
    // const params = new HttpParams()
    // //primero la llave, y luego su valor
    // //y esto es un objeto
    // .set('fields', 'name,capital,cca2,flags,population');

   const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(tap(console.log))
  }
}
