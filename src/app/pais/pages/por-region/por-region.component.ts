import { Component, } from '@angular/core';
import { Country } from 'src/app/interfaces/pais-interface';

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

  constructor() { }

  getClassCSS(region: string): string {
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    this.regionActiva = region;

    //TODO: hacer el llamado al servicio
  }

  

}
