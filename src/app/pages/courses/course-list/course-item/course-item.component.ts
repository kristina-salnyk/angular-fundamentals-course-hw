import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../../../core/models/Course.model';
import { formatDurationToString } from '../../../../shared/helpers/formatDurationToString';

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
    creationDate: '',
  };
  @Output() courseEdit = new EventEmitter<void>();
  @Output() courseDelete = new EventEmitter<void>();

  formatDurationToString = formatDurationToString;

  onEditClick() {
    this.courseEdit.emit();
  }

  onDeleteClick() {
    this.courseDelete.emit();
  }
}
