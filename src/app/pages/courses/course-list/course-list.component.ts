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
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: '08/28/2020',
    },
    {
      id: '2',
      title: 'Video Course 2. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: '08/28/2020',
    },
  ];
}
