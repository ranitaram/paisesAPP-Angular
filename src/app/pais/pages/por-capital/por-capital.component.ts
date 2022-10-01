import { Component, } from '@angular/core';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  termino: string = '';
  existeError: boolean = false;
 
  paises : Country[] = [];

  constructor(private paisService: PaisService) { }

  //este es el termino que viene del input
  buscar(termino: string){
    this.existeError = false;
    //aqui se lo establecemos a la propiedad de la clase
    this.termino = termino;
    console.log(this.termino);

    //recordar colocar subscribe para que se dispare
    this.paisService.buscarCapital(termino)
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

  

  

}
