import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../../core/models/Course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() courseEdit = new EventEmitter<string>();
  @Output() courseDelete = new EventEmitter<string>();

  onEditCourse(id: string) {
    this.courseEdit.emit(id);
  }

  onDeleteCourse(id: string) {
    this.courseDelete.emit(id);
  }
}
