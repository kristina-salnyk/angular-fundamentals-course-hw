import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Course } from '../../../../core/models/Course.model';

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

  describe('course card', () => {
    let courseCardDe: DebugElement;
    let courseCardEl: HTMLElement;
    let course: Course;
    let courseItemComponentSpy: jasmine.SpyObj<CourseItemComponent>;

    beforeEach(() => {
      courseCardDe = fixture.debugElement.query(By.css('.course-card'));
      courseCardEl = courseCardDe.nativeElement;

      course = {
        id: '1',
        title: 'Video Course 1. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: '08/28/2020',
      };

      component.course = course;

      courseItemComponentSpy = jasmine.createSpyObj('formatDurationToString', [
        'formatDurationToString',
      ]);
      courseItemComponentSpy.formatDurationToString.and.returnValue(
        '1h 28 min'
      );

      spyOn(component, 'formatDurationToString').and.returnValue(
        courseItemComponentSpy.formatDurationToString(0)
      );

      fixture.detectChanges();
    });

    it('should display course title', () => {
      expect(courseCardEl.textContent).toContain(course.title);
    });

    it('should display course description', () => {
      expect(courseCardEl.textContent).toContain(course.description);
    });

    it('should display course duration in the correct format', () => {
      expect(courseCardEl.textContent).toContain(
        courseItemComponentSpy.formatDurationToString(0)
      );
    });

    it('should display course creation date', () => {
      expect(courseCardEl.textContent).toContain(course.creationDate);
    });

    it('should raise courseEdit event when Edit button is clicked', () => {
      spyOn(component.courseEdit, 'emit');

      const editButton = courseCardDe.query(
        By.css('[data-testid="edit-button"]')
      );

      editButton.nativeElement.click();
      expect(component.courseEdit.emit).toHaveBeenCalled();
    });

    it('should raise courseDelete event when Delete button is clicked', () => {
      spyOn(component.courseDelete, 'emit');

      const deleteButton = courseCardDe.query(
        By.css('[data-testid="delete-button"]')
      );

      deleteButton.nativeElement.click();
      expect(component.courseDelete.emit).toHaveBeenCalled();
    });
  });
});
