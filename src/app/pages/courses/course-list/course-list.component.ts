import { Component, Input } from '@angular/core';

import { Course } from '../../../core/models/Course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
}
