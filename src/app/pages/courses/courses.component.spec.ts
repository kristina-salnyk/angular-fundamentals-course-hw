import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

import { CoursesComponent } from './courses.component';
import { Course } from '../../core/models/Course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { CoursesService } from '../../core/services/courses.service';
import { SharedModule } from '../../shared/shared.module';
import { CoursesModule } from './courses.module';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let courses: Course[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [MatIconModule, FormsModule, SharedModule, CoursesModule],
      providers: [FilterPipe, CoursesService],
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    courses = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: new Date('06/21/2023'),
        topRated: true,
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 48,
        creationDate: new Date('05/22/2023'),
        topRated: true,
      },
      {
        id: '3',
        title: 'Video Course 3. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 48,
        creationDate: new Date('08/23/2023'),
        topRated: true,
      },
      {
        id: '4',
        title: 'Video Course 4. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 48,
        creationDate: new Date('01/23/2023'),
        topRated: true,
      },
    ];

    component.courses = courses;
    component.filteredCourses = courses;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should order courses by creation date', () => {
    const coursesDe = fixture.debugElement.queryAll(By.css('[data-courseId]'));

    expect(coursesDe.length).toBe(courses.length);
    expect(coursesDe[0].nativeElement.getAttribute('data-courseId')).toBe(
      courses[2].id
    );
    expect(coursesDe[1].nativeElement.getAttribute('data-courseId')).toBe(
      courses[0].id
    );
    expect(coursesDe[2].nativeElement.getAttribute('data-courseId')).toBe(
      courses[1].id
    );
    expect(coursesDe[3].nativeElement.getAttribute('data-courseId')).toBe(
      courses[3].id
    );
  });

  it('should filter courses by title', () => {
    const searchQuery = 'Video Course 4';
    const searchedCourses: Course[] = [
      {
        id: '4',
        title: 'Video Course 4. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 48,
        creationDate: new Date('01/23/2023'),
        topRated: true,
      },
    ];

    component.onSearchCourses(searchQuery);
    expect(component.filteredCourses).toEqual(searchedCourses);
  });
});

describe('CoursesComponent class-only', () => {
  let component: CoursesComponent;
  let coursesService: CoursesService;
  let filterPipe: FilterPipe;
  let course: Course;

  beforeEach(() => {
    coursesService = new CoursesService();
    filterPipe = new FilterPipe();
    component = new CoursesComponent(coursesService, filterPipe);

    course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: new Date('06/21/2023'),
      topRated: false,
    };
  });

  it('should update filteredCourses when onSearchCourses is called', () => {
    const searchQuery = 'Video Course 1';
    const searchedCourses = [course];

    spyOn(filterPipe, 'transform').and.returnValue(searchedCourses);

    component.onSearchCourses(searchQuery);
    expect(filterPipe.transform).toHaveBeenCalledWith(
      component.courses,
      'title',
      searchQuery
    );
    expect(component.filteredCourses).toEqual(searchedCourses);
  });

  it("should log 'Edit click on [id]' message when onEditCourse method is called", () => {
    spyOn(console, 'log');
    component.onEditCourse(course.id);
    expect(console.log).toHaveBeenCalledWith('Edit click on ' + course.id);
  });

  it('should call the removeCourse method of the coursesService when the onDeleteCourse method is called', () => {
    spyOn(coursesService, 'removeCourse');
    component.onDeleteCourse(course.id);
    expect(coursesService.removeCourse).toHaveBeenCalledWith(course.id);
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
      declarations: [],
      imports: [MatIconModule, FormsModule, SharedModule, CoursesModule],
      providers: [FilterPipe, CoursesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    coursesDe = fixture.debugElement.query(By.css('.courses'));
    fixture.detectChanges();
  });

  it("should log 'Load more click' message when 'Load more' button is clicked", () => {
    spyOn(console, 'log');

    const loadMoreBtnDe = coursesDe.query(
      By.css('[data-testid="load-more-button"]')
    );
    loadMoreBtnDe.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalledWith('Load more click');
  });

  it("should log 'Add course click' message when 'Add course' button is clicked", () => {
    spyOn(console, 'log');

    const addCourseBtnDe = coursesDe.query(
      By.css('[data-testid="add-course-button"]')
    );
    addCourseBtnDe.triggerEventHandler('click');
    expect(console.log).toHaveBeenCalledWith('Add course click');
  });
});
