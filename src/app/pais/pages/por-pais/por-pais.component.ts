import { Component, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})

export class PorPaisComponent  {
  termino: string = '';
  existeError: boolean = false;
 
  paises : Country[] = [];

  //inyectamos nuestro servicio
  constructor( private paisService: PaisService) { }

 

  buscar(){
    this.existeError = false;
    
    console.log(this.termino);

    //recordar colocar subscribe para que se dispare
    this.paisService.buscarPais(this.termino)
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
