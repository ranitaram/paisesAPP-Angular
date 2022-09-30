import { Component, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent  {

  //este input hace referencia en el pais-tabla.html para que funcione
  //es muy importante o nunca funcionara
  @Input() paises: Country[] = [];

  constructor(private paisService: PaisService) {


   }

  
  


  

}
