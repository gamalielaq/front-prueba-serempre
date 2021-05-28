import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private carteLeraPage = 1;
  public cargando: boolean = false;

  constructor(
    private _http: HttpClient
  ) { }

  get params() {
    return {
      api_key : '0a78e905195ddd8076496657e12145c3',
      language: 'es-ES',
      page: this.carteLeraPage.toString()
    }
  }

  resetCarteleraPage() {
    this.carteLeraPage = 1;
  }

  getListProducts(): Observable<Product[]> {
    
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this._http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`, {params: this.params}).pipe(
      map( (resp)=> resp.results ),
      tap( () => {
        this.carteLeraPage += 1;
        this.cargando = false;
      })
    );
  }
}