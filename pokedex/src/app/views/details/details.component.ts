import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
/**
 * This class represents a logical the details component.
 * Here i'm inject a services for consuming pokedex api
 */
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
