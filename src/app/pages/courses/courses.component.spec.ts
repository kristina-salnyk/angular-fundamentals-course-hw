import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { Course } from '../../core/models/Course.model';

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
  let course: Course;

  beforeEach(() => {
    component = new CoursesComponent();

    course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: '06/21/2023',
    };
  });

  it("should log 'Edit click on [id]' message when onEditCourse method is called", () => {
    spyOn(console, 'log');
    component.onEditCourse(course);
    expect(console.log).toHaveBeenCalledWith('Edit click on ' + course.id);
  });

  it("should log 'Delete click on [id]' message when onDeleteCourse method is called", () => {
    spyOn(console, 'log');
    component.onDeleteCourse(course);
    expect(console.log).toHaveBeenCalledWith('Delete click on ' + course.id);
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

describe('CoursesComponent stand-alone', () => {
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesDe: DebugElement;

  beforeEach(waitForAsync(() => {
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    coursesDe = fixture.debugElement.query(By.css('.courses'));
    fixture.detectChanges();
  });

  it("should log 'Load more click' message when 'Load more' button is clicked", () => {
    spyOn(console, 'log');

    const loadMoreBtn = coursesDe.query(
      By.css('[data-testid="load-more-button"]')
    );

    loadMoreBtn.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalledWith('Load more click');
  });

  it("should log 'Add course click' message when 'Add course' button is clicked", () => {
    spyOn(console, 'log');

    const addCourseBtn = coursesDe.query(
      By.css('[data-testid="add-course-button"]')
    );

    addCourseBtn.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalledWith('Add course click');
  });
});
