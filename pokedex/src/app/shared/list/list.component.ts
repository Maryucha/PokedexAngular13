import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

/**
 * asas
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
        this.setAllPokemons = this.setAllPokemons;
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
