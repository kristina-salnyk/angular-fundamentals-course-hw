import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchQuery = '';
  @Output() coursesSearch = new EventEmitter<string>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.coursesSearch.emit(this.searchQuery);
  }
}
