import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Course } from '../../../../core/models/Course.model';

@Component({
  selector: 'app-host-component',
  template: `
    <app-course-item
      [course]="course"
      (courseEdit)="onCourseEdit(course)"
      (courseDelete)="onCourseDelete(course)">
    </app-course-item>
  `,
})
class TestHostComponent {
  course: Course = {
    id: '1',
    title: 'Video Course 1. Name tag',
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    duration: 88,
    creationDate: '06/21/2023',
    topRated: false,
  };
  courseEdit!: Course;
  courseDelete!: Course;

  onCourseEdit(course: Course) {
    this.courseEdit = course;
  }
  onCourseDelete(course: Course) {
    this.courseDelete = course;
  }
}

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

describe('CourseItemComponent class-only', () => {
  let component: CourseItemComponent;

  beforeEach(() => {
    component = new CourseItemComponent();
  });

  it('should raise courseEdit event when onEditClick method is called', () => {
    spyOn(component.courseEdit, 'emit');
    component.onEditClick();
    expect(component.courseEdit.emit).toHaveBeenCalled();
  });

  it('should raise courseDelete event when onDeleteClick method is called', () => {
    spyOn(component.courseDelete, 'emit');
    component.onDeleteClick();
    expect(component.courseDelete.emit).toHaveBeenCalled();
  });
});

describe('CourseItemComponent stand-alone', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseDe: DebugElement;
  let courseEl: HTMLElement;
  let course: Course;
  let courseItemComponentSpy: jasmine.SpyObj<CourseItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, ButtonComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    courseDe = fixture.debugElement.query(By.css('.course-card'));
    courseEl = courseDe.nativeElement;

    course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: '06/21/2023',
      topRated: false,
    };

    component.course = course;

    courseItemComponentSpy = jasmine.createSpyObj('formatDurationToString', [
      'formatDurationToString',
    ]);
    courseItemComponentSpy.formatDurationToString.and.returnValue('1h 28 min');

    spyOn(component, 'formatDurationToString').and.returnValue(
      courseItemComponentSpy.formatDurationToString(0)
    );

    fixture.detectChanges();
  });

  it('should display course title', () => {
    expect(courseEl.textContent).toContain(course.title);
  });

  it('should display course description', () => {
    expect(courseEl.textContent).toContain(course.description);
  });

  it('should display course duration in the correct format', () => {
    expect(courseEl.textContent).toContain(
      courseItemComponentSpy.formatDurationToString(course.duration)
    );
  });

  it('should display course creation date', () => {
    expect(courseEl.textContent).toContain(course.creationDate);
  });

  it("should raise courseEdit event when 'Edit' button is clicked", () => {
    spyOn(component.courseEdit, 'emit');

    const editBtn = courseDe.query(By.css('[data-testid="edit-button"]'));

    editBtn.triggerEventHandler('click');
    expect(component.courseEdit.emit).toHaveBeenCalled();
  });

  it("should raise courseDelete event when 'Delete' button is clicked", () => {
    spyOn(component.courseDelete, 'emit');

    const deleteBtn = courseDe.query(By.css('[data-testid="delete-button"]'));

    deleteBtn.triggerEventHandler('click');
    expect(component.courseDelete.emit).toHaveBeenCalled();
  });
});

describe('CourseItemComponent test-host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let courseDe: DebugElement;
  let courseEl: HTMLElement;
  let component: CourseItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, ButtonComponent, TestHostComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    courseDe = fixture.debugElement.query(By.css('.course-card'));
    courseEl = courseDe.nativeElement;

    component = courseDe.injector.get(CourseItemComponent);
    spyOn(component, 'formatDurationToString').and.returnValue('1h 28 min');

    fixture.detectChanges();
  });

  it('should display course title', () => {
    expect(courseEl.textContent).toContain(testHost.course.title);
  });

  it('should display course description', () => {
    expect(courseEl.textContent).toContain(testHost.course.description);
  });

  it('should display course duration in the correct format', () => {
    expect(component.formatDurationToString).toHaveBeenCalledWith(
      testHost.course.duration
    );
    expect(courseEl.textContent).toContain('1h 28 min');
  });

  it('should display course creation date', () => {
    expect(courseEl.textContent).toContain(testHost.course.creationDate);
  });

  it("should raise courseEdit event when 'Edit' button is clicked", () => {
    const editBtn = courseDe.query(By.css('[data-testid="edit-button"]'));

    editBtn.triggerEventHandler('click');
    expect(testHost.courseEdit).toBe(testHost.course);
  });

  it("should raise courseDelete event when 'Delete' button is clicked", () => {
    const deleteBtn = courseDe.query(By.css('[data-testid="delete-button"]'));

    deleteBtn.triggerEventHandler('click');
    expect(testHost.courseDelete).toBe(testHost.course);
  });
});
