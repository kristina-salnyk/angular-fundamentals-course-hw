import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { CourseItemComponent } from './course-item.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, ButtonComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
