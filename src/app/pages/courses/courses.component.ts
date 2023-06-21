import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Course } from '../../core/models/Course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
// OnChanges,
export class CoursesComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  courses: Course[] = [];

  // ngOnChanges() {
  //   console.log('OnChanges hook (only if component has Inputs)');
  // }

  ngOnInit() {
    console.log('OnInit hook');

    this.courses = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: '06/21/2023',
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: '06/22/2023',
      },
      {
        id: '2',
        title: 'Video Course 3. Name tag',
        description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        duration: 88,
        creationDate: '06/01/2023',
      },
    ];
  }

  ngDoCheck() {
    console.log('DoCheck hook');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit hook');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked hook');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit hook');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked hook');
  }

  ngOnDestroy() {
    console.log('OnDestroy hook');
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
