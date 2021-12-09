import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  constructor(private paisServices: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisServices.buscarPais(this.termino).subscribe({
      next: (data) => {
        if (data.length === undefined || data.length === 0) {
          this.hayError = true;
        } else {
          this.paises = data;
          console.log(this.paises);
        }
      },
      error: (err) => {
        this.hayError = true;
      },
    }); /*
      (paises) => {
        console.log(paises);
      },
      (err) => {
        console.log("hay error");
        console.info(err)
       // this.hayError = true;
      }
    );*/
  }
  sugerencia(valor: string) {
    this.hayError = false;
    this.termino = valor;
    this.mostrarSugerencias = true;
    this.paisServices.buscarPais(valor).subscribe({
      next: (data) => (this.paisesSugeridos = data.splice(0, 5)),
      error: (err) => (this.paisesSugeridos = []),
    });
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
