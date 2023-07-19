import { Component, OnInit } from '@angular/core';

import { Course } from '../../core/models/Course.model';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { CoursesService } from '../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getCoursesList();
    this.filteredCourses = this.courses.slice();

    this.coursesService.coursesChanged.subscribe((courses: Course[]) => {
      this.courses = courses;
      this.filteredCourses = this.courses.slice();
    });
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

  onEditCourse(id: string) {
    console.log('Edit click on ' + id);
  }

  onDeleteCourse(id: string) {
    this.coursesService.removeCourse(id);
  }
}
