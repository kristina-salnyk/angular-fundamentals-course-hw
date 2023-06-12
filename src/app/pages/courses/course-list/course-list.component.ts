import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../../core/models/Course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() editCourseEvent = new EventEmitter<Course>();
  @Output() deleteCourseEvent = new EventEmitter<Course>();

  onEditCourse(course: Course) {
    this.editCourseEvent.emit(course);
  }

  onDeleteCourse(course: Course) {
    this.deleteCourseEvent.emit(course);
  }
}
