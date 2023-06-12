import { Component, OnInit } from '@angular/core';

import { Course } from '../../core/models/Course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit() {
    this.courses = [
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

  onLoadMoreClick() {
    console.log('Load more click');
  }

  onAddCourseClick() {
    console.log('Add course click');
  }

  onEditCourse(course: Course) {
    console.log('Edit click on ' + course.id);
  }

  onDeleteCourse(course: Course) {
    console.log('Delete click on ' + course.id);
  }
}
