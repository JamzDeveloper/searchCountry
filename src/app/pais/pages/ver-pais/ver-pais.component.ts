import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisServices: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ codigoPais }) =>
          this.paisServices.getPaisAlpha(codigoPais)
        ),
        tap(console.log)
      )
      .subscribe((resp) => (this.pais = resp));
    /*
    this.activatedRoute.params.subscribe(({ codigoPais }) => {
      console.log(codigoPais);
      this.paisServices.getPaisAlpha(codigoPais).subscribe((pais) => {
        console.log(pais);
      });
    });*/
  }
}
