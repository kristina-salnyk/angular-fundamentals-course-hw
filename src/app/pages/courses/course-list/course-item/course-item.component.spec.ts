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
    let courseDe: DebugElement;
    let courseEl: HTMLElement;
    let course: Course;
    let courseDuration: string;
    let formatDurationToStringMock: jasmine.SpyObj<CourseItemComponent>;

    beforeEach(() => {
      courseDe = fixture.debugElement.query(By.css('.course-card'));
      courseEl = courseDe.nativeElement;

      course = {
        id: '1',
        title: 'Video Course 1. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: '08/28/2020',
      };

      courseDuration = '1h 28min';

      component.course = course;

      formatDurationToStringMock = jasmine.createSpyObj(
        'formatDurationToString',
        ['formatDurationToString']
      );
      formatDurationToStringMock.formatDurationToString.and.returnValue(
        courseDuration
      );

      spyOn(component, 'formatDurationToString').and.returnValue(
        formatDurationToStringMock.formatDurationToString(0)
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
      expect(courseEl.textContent).toContain(courseDuration);
    });

    it('should display course creation date', () => {
      expect(courseEl.textContent).toContain(course.creationDate);
    });
  });
});
