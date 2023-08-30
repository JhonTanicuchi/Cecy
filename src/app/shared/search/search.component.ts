import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-solicitud-matriculas',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor() { }
  @Output() searchEvent = new EventEmitter<string>();
  SearchEvent(term: string) {
    this.searchEvent.emit(term)
  }
}
