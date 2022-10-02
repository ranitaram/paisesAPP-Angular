import { Component, } from '@angular/core';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 8px
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = [
   'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClassCSS(region: string): string {
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }


  activarRegion(region: string){
    //hace la comparacion, para no volver a vaciar la lista
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    //vaciamos la lista cuando escojamos otra opcion
    this.paises = []

    //TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(region)
    .subscribe({
      next: (paises)=> {
        console.log(paises);
        this.paises = paises;
      }
    })
  }

  

}
