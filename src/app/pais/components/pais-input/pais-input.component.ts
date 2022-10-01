import { Component, EventEmitter,  Output, OnInit, Input  } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent  implements OnInit{
  
  //generalmente a los eventos se le coloca primero la palabra on
  //para identificar que es un evento, siempre es importante que
  //nosotros especifiquemos el tipo de evento que va a emitir,
  //en este caso es el termino  y es de tipo string
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //ondebaunce se va a emitir cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //aqui recibimos el placeholder
  //esto crea una nueva propiedad en el paisInputComponent
  @Input() placeholder: string = "";
  
  
  //el subjec s un observable y asi se crea
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  //se dispara una unica vez, cuando el componente ya esta inicializado
  ngOnInit(){
    this.debouncer.
    pipe(
      //cuantas milesimas de segundo quiero esperar antes de emitir el siguiente valor
      debounceTime(300)
    )
    .subscribe(valor => {
      //mandando a emitir el debounce
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
    //subcribe es para subscrbirse a los valores que emite, "es un observable"

  }

  teclaPresionada(){
    //next() para mandar el siguiente valor, cada vez que alguien presione una 
    //tecla va a mandar a llmar al next, y el next esta subscrito a
    //ngOnInit, va a recibir el nuevo valor y eso es lo que va imprimir
   this.debouncer.next(this.termino);
  }

  

}
