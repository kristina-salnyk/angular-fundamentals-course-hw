import { Component, ViewChild } from '@angular/core';

import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchInput', { static: true })
  searchInputRef: InputComponent | undefined;

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.searchInputRef?.value);
  }
}
