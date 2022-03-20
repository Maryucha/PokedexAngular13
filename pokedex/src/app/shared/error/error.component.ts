import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

/**
 * This class is a lógical the error component
 */
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  /**
   * asas
   */
  constructor(
    private pokemonService: PokemonsService
  ) { }

  /**
   * asas
   */
   ngOnInit(){
    this.pokemonService.apiList.subscribe(
      res => {
        this.getAllPokemons = res.results;
        this.setAllPokemons = this.getAllPokemons;
      },
      error => {
        this.apiError = true;
      }
      
    );
    
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
      
    });
    this.getAllPokemons = filter;
  }
}

