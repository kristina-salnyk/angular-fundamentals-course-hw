import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { Course } from '../../../core/models/Course.model';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
    });
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CourseListComponent class-only', () => {
  let component: CourseListComponent;
  let course: Course;

  beforeEach(() => {
    component = new CourseListComponent();

    course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: '06/21/2023',
    };
  });

  it('should raise courseEdit event with the selected course', () => {
    spyOn(component.courseEdit, 'emit');
    component.onEditCourse(course);
    expect(component.courseEdit.emit).toHaveBeenCalledWith(course);
  });

  it('should raise courseDelete event with the selected course', () => {
    spyOn(component.courseDelete, 'emit');
    component.onDeleteCourse(course);
    expect(component.courseDelete.emit).toHaveBeenCalledWith(course);
  });
});
