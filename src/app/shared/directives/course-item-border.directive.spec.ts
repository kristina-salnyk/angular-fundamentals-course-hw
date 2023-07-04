import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemBorderDirective } from './course-item-border.directive';
import { By } from '@angular/platform-browser';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

@Component({
  template: `<div appCourseItemBorder [creationDate]="creationDate"></div>`,
})
class TestComponent {
  creationDate: Date = new Date();
}

describe('CourseItemBorderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: CourseItemBorderDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemBorderDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);

    directive = fixture.debugElement
      .query(By.directive(CourseItemBorderDirective))
      .injector.get(CourseItemBorderDirective);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new CourseItemBorderDirective();
    expect(directive).toBeTruthy();
  });

  it('should have a border', () => {
    const currentDate = new Date();
    directive.creationDate = new Date(currentDate.getTime() + MS_PER_DAY);

    directive.ngOnInit();
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('div');
    expect(element.style.borderWidth).toBe('2px');
    expect(element.style.borderStyle).toBe('solid');
  });

  it('should have a blue border if creation date is in the future', () => {
    const currentDate = new Date();
    directive.creationDate = new Date(currentDate.getTime() + MS_PER_DAY);

    directive.ngOnInit();
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('div');
    expect(element.style.borderColor).toBe('rgb(50, 174, 212)');
  });

  it('should have a green border if creation date is within the last 14 days', () => {
    const currentDate = new Date();
    directive.creationDate = new Date(currentDate.getTime() - MS_PER_DAY * 7);

    directive.ngOnInit();
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('div');
    expect(element.style.borderColor).toBe('rgb(149, 192, 55)');
  });

  it('should have a blue border if creation date is in the past more than 14 days', () => {
    const currentDate = new Date();
    directive.creationDate = new Date(currentDate.getTime() - MS_PER_DAY * 21);

    directive.ngOnInit();
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('div');
    expect(element.style.borderColor).toBe('transparent');
  });
});
