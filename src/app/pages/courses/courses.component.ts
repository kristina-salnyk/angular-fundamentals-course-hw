import { Component, OnInit } from '@angular/core';

import { Course } from '../../core/models/Course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [FilterPipe],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(private filterPipe: FilterPipe) {}

  ngOnInit() {
    this.courses = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: new Date('06/21/2023'),
        topRated: true,
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 48,
        creationDate: new Date('05/22/2023'),
        topRated: true,
      },
      {
        id: '3',
        title: 'Video Course 3. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: new Date('08/22/2023'),
        topRated: false,
      },
    ];

    this.filteredCourses = this.courses;
  }

  onSearchCourses(searchQuery: string) {
    this.filteredCourses = this.filterPipe.transform(
      this.courses,
      'title',
      searchQuery
    );
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
