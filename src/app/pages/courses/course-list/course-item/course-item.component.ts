import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../../../core/models/Course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course: Course = {
    id: '',
    title: '',
    description: '',
    duration: 0,
    creationDate: new Date(),
    topRated: false,
  };
  @Output() courseEdit = new EventEmitter<void>();
  @Output() courseDelete = new EventEmitter<void>();

  onEditClick() {
    this.courseEdit.emit();
  }

  onDeleteClick() {
    if (confirm('Do you really want to delete this course?')) {
      this.courseDelete.emit();
    }
  }
}
