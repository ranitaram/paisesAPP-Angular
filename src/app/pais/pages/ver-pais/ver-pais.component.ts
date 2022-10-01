import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  //con ActivatedRoute, nos subscribimos a cualquier cambio del url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.paisService.getPaisPorAlpha(id))
    )
      .subscribe(pais => 
        this.pais = pais
      );
    // this.activatedRoute.params
    // .subscribe(({id}) => {
    //   console.log(id);
    //   //TODO. Hacer otro observable para traerse la informacion del pais
    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
  }

}
