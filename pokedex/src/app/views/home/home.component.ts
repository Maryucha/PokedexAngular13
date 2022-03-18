import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/**
 * This class represents a logical the home component.
 * Here i'm inject a services for consuming pokedex api
 */
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
