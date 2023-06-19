import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('InputComponent class-only', () => {
  let component: InputComponent;

  beforeEach(() => {
    component = new InputComponent();
  });

  it('should raise the valueChange event when onChange method is called', () => {
    component.value = 'Name tag';

    component.valueChange
      .pipe(first())
      .subscribe(currentValue => expect(currentValue).toBe(component.value));
    component.onChange();
  });
});
