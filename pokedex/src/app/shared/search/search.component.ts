import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * asas
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  /**
   * asqas
   */
  constructor() { }

  /**
   * asaas
   */
  ngOnInit(): void {
  }

  /**
   * asas
   * @param value 
   */
  public search(value: string){
    this.emmitSearch.emit(value);
  }

}
