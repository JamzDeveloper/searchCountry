import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  constructor(private regionService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];
    this.regionService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }
  getClaseCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary m-1'
      : 'btn-outline-primary m-1 active';
  }
}
