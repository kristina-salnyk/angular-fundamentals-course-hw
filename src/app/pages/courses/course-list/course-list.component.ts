import { Component } from '@angular/core';

import { Course } from '../../../core/models/Course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  courses: Course[] = [
    {
      id: '1',
      title: 'Angular',
      description:
        'Get started quickly learning the new version of Angular. You will be introduced to Angular core concepts, then discover best practices for setting up Angular apps with its CLI, and finally, begin to explore Angular features like forms.',
      duration: 120,
      creationDate: new Date('2023-06-06'),
    },
    {
      id: '2',
      title: 'Angular 2',
      description:
        'Get started quickly learning the new version of Angular. You will be introduced to Angular core concepts, then discover best practices for setting up Angular apps with its CLI, and finally, begin to explore Angular features like forms.',
      duration: 120,
      creationDate: new Date('2023-06-06'),
    },
  ];
}
