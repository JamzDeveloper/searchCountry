import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisServices: PaisService) { }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisServices.buscarCapital(this.termino).subscribe({
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
 
}
