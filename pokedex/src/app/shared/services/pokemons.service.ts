import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

/**
 * This class represents a comunication with poke api
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private urlApi: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

  /**
   * asas
   */
  constructor(
    private http: HttpClient
  ) { }

  get apiList():Observable<any>{
    return this.http.get<any>(this.urlApi).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }

  getOne(name: string) {
    return this.http.get(`${this.urlApi}/${name}`);
  }
}
