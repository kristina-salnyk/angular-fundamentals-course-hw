import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchQuery = '';

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.searchQuery);
  }
}
