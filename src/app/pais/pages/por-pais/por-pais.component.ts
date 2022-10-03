import { Component, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})

export class PorPaisComponent  {
  termino: string = '';
  existeError: boolean = false;
 
  paises : Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  //inyectamos nuestro servicio
  constructor( private paisService: PaisService) { }

 

  //este es el termino que viene del input
  buscar(termino: string){
   
    this.existeError = false;
    //aqui se lo establecemos a la propiedad de la clase
    this.termino = termino;
    console.log(this.termino);

    //recordar colocar subscribe para que se dispare
    this.paisService.buscarPais(termino)
    .subscribe({
      next: (paises)=> {
        console.log(paises);

        //establecer para que los paises sean igual a los 
        //paises que recibo como argumento
        this.paises = paises;
       
      },
      error: (err)=> {
        this.existeError = true;
        this.paises = [];
      }
    })
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = false;
    this.existeError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    //TODO: crear sugerencias
    this.paisService.buscarPais(termino)
    .subscribe(paises=> this.paisesSugeridos = paises.splice(0,3),
    
    );
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
    
  }


}
