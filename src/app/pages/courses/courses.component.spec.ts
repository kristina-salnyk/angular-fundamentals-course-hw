import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        SearchComponent,
        CourseListComponent,
        CourseItemComponent,
        ButtonComponent,
        InputComponent,
      ],
      imports: [MatIconModule, FormsModule],
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CoursesComponent class-only', () => {
  let component: CoursesComponent;

  beforeEach(() => {
    component = new CoursesComponent();
  });

  describe('ngOnInit', () => {
    it('should have an empty array of courses after construction', () => {
      expect(component.courses).toEqual([]);
    });

    it('should have a non-empty array of courses after ngOnInit is called', () => {
      component.ngOnInit();
      expect(component.courses.length).toBeGreaterThan(0);
    });
  });
});
