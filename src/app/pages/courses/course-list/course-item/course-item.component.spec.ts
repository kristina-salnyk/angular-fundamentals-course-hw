import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Course } from '../../../../core/models/Course.model';
import { CourseItemBorderDirective } from '../../../../shared/directives/course-item-border.directive';
import { DurationPipe } from '../../../../shared/pipes/duration.pipe';

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
    creationDate: new Date('06/21/2023'),
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
  let courseDe: DebugElement;
  let course: Course;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        ButtonComponent,
        CourseItemBorderDirective,
        DurationPipe,
      ],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    courseDe = fixture.debugElement.query(By.css('.course-card'));

    course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: new Date('06/21/2023'),
      topRated: true,
    };

    component.course = course;

    jasmine.clock().mockDate(new Date('06/17/2023'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set course card border color to rgb(50, 174, 212)', () => {
    expect(courseDe.nativeElement.style.borderColor).toBe('rgb(50, 174, 212)');
  });

  it('should convert duration to the correct format', () => {
    const durationDe = courseDe.query(
      By.css('[data-testid="course-duration"]')
    );
    expect(durationDe.nativeElement.textContent).toBe('1h 28 min');
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
    expect(component.courseEdit.emit).toHaveBeenCalledWith();
  });

  it('should raise courseDelete event when onDeleteClick method is called', () => {
    spyOn(component.courseDelete, 'emit');
    component.onDeleteClick();
    expect(component.courseDelete.emit).toHaveBeenCalledWith();
  });
});

describe('CourseItemComponent stand-alone', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseDe: DebugElement;
  let course: Course;
  let durationPipeSpy: jasmine.Spy;
  let datePipeSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        ButtonComponent,
        CourseItemBorderDirective,
        DurationPipe,
      ],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    courseDe = fixture.debugElement.query(By.css('.course-card'));

    course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: new Date('06/21/2023'),
      topRated: false,
    };

    component.course = course;

    durationPipeSpy = spyOn(
      DurationPipe.prototype,
      'transform'
    ).and.returnValue('1h 28 min');

    datePipeSpy = spyOn(DatePipe.prototype, 'transform').and.returnValue(
      '21 Jun, 2023'
    );

    fixture.detectChanges();
  });

  it('should display course title', () => {
    const titleDe = courseDe.query(By.css('[data-testid="course-title"]'));
    expect(titleDe.nativeElement.textContent).toBe(course.title);
  });

  it('should display course description', () => {
    const descriptionDe = courseDe.query(
      By.css('[data-testid="course-description"]')
    );
    expect(descriptionDe.nativeElement.textContent).toBe(course.description);
  });

  it('should display course duration in the correct format', () => {
    const durationDe = courseDe.query(
      By.css('[data-testid="course-duration"]')
    );
    expect(durationPipeSpy).toHaveBeenCalledWith(course.duration);
    expect(durationDe.nativeElement.textContent).toBe(
      durationPipeSpy(course.duration)
    );
  });

  it('should display course creation date in the correct format', () => {
    const creationDateDe = courseDe.query(
      By.css('[data-testid="course-creation-date"]')
    );
    expect(datePipeSpy).toHaveBeenCalledWith(
      course.creationDate,
      'd MMM, YYYY'
    );
    expect(creationDateDe.nativeElement.textContent).toBe(
      datePipeSpy(course.creationDate)
    );
  });

  it("should raise courseEdit event when 'Edit' button is clicked", () => {
    spyOn(component.courseEdit, 'emit');

    const editBtnDe = courseDe.query(By.css('[data-testid="edit-button"]'));
    editBtnDe.triggerEventHandler('click');
    expect(component.courseEdit.emit).toHaveBeenCalledWith();
  });

  it("should raise courseDelete event when 'Delete' button is clicked", () => {
    spyOn(component.courseDelete, 'emit');

    const deleteBtnDe = courseDe.query(By.css('[data-testid="delete-button"]'));
    deleteBtnDe.triggerEventHandler('click');
    expect(component.courseDelete.emit).toHaveBeenCalledWith();
  });
});

describe('CourseItemComponent test-host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let courseDe: DebugElement;
  let durationPipeSpy: jasmine.Spy;
  let datePipeSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        ButtonComponent,
        CourseItemBorderDirective,
        TestHostComponent,
        DurationPipe,
      ],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    courseDe = fixture.debugElement.query(By.css('.course-card'));

    durationPipeSpy = spyOn(
      DurationPipe.prototype,
      'transform'
    ).and.returnValue('1h 28 min');

    datePipeSpy = spyOn(DatePipe.prototype, 'transform').and.returnValue(
      '21 Jun, 2023'
    );

    fixture.detectChanges();
  });

  it('should display course title', () => {
    const titleDe = courseDe.query(By.css('[data-testid="course-title"]'));
    expect(titleDe.nativeElement.textContent).toBe(testHost.course.title);
  });

  it('should display course description', () => {
    const descriptionDe = courseDe.query(
      By.css('[data-testid="course-description"]')
    );
    expect(descriptionDe.nativeElement.textContent).toBe(
      testHost.course.description
    );
  });

  it('should display course duration in the correct format', () => {
    const durationDe = courseDe.query(
      By.css('[data-testid="course-duration"]')
    );
    expect(durationPipeSpy).toHaveBeenCalledWith(testHost.course.duration);
    expect(durationDe.nativeElement.textContent).toBe(
      durationPipeSpy(testHost.course.duration)
    );
  });

  it('should display course creation date in the correct format', () => {
    const creationDateDe = courseDe.query(
      By.css('[data-testid="course-creation-date"]')
    );
    expect(datePipeSpy).toHaveBeenCalledWith(
      testHost.course.creationDate,
      'd MMM, YYYY'
    );
    expect(creationDateDe.nativeElement.textContent).toBe(
      datePipeSpy(testHost.course.creationDate)
    );
  });

  it("should raise courseEdit event when 'Edit' button is clicked", () => {
    const editBtnDe = courseDe.query(By.css('[data-testid="edit-button"]'));
    editBtnDe.triggerEventHandler('click');
    expect(testHost.courseEdit).toBe(testHost.course);
  });

  it("should raise courseDelete event when 'Delete' button is clicked", () => {
    const deleteBtnDe = courseDe.query(By.css('[data-testid="delete-button"]'));
    deleteBtnDe.triggerEventHandler('click');
    expect(testHost.courseDelete).toBe(testHost.course);
  });
});
