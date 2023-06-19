import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, InputComponent, ButtonComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SearchComponent class-only', () => {
  let component: SearchComponent;

  beforeEach(() => {
    component = new SearchComponent();
  });

  it('should log the current search query when onSubmit method is called', () => {
    component.searchQuery = 'Name tag';

    spyOn(console, 'log');
    component.onSubmit(new Event('submit'));
    expect(console.log).toHaveBeenCalledWith(component.searchQuery);
  });
});
