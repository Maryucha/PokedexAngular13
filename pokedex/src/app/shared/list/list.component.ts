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

  public apiError: boolean = true;
  /**
   * asas
   */
  constructor(
    private pokemonService: PokemonsService
  ) { }

  /**
   * asas
   */
  ngOnInit() {
    this.pokemonService.apiList.subscribe(
      res => {
        this.getAllPokemons = res.results;
        this.setAllPokemons = this.getAllPokemons;
      });
    if (this.getAllPokemons.length > 0) {
      this.apiError = true;
    } else {
      this.apiError = false;
    }
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    if (filter.length > 0) {
      this.getAllPokemons = filter;
      this.apiError = true;
    } else {
      this.getAllPokemons = null;
      this.apiError = false;
    }
  }
}
