import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL = 'https://restcountries.com/v2';
  public respuesta: Country[] = [];

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,alpha2Code,capital,population,flag'
    );
  }
  constructor(private hhtp: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.hhtp.get<Country[]>(url, { params: this.httpParams });
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.hhtp.get<Country[]>(url, { params: this.httpParams });
  }
  getPaisAlpha(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.hhtp.get<Country>(url);
  }
  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${termino}`;
    return this.hhtp.get<Country[]>(url, { params: this.httpParams });
  }
}
