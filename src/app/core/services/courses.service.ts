import { EventEmitter, Injectable } from '@angular/core';

import { Course } from '../models/Course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [
    {
      id: '1',
      title: 'Video Course 1. Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 88,
      creationDate: new Date('07/21/2023'),
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
  coursesChanged = new EventEmitter<Course[]>();

  getCoursesList(): Course[] {
    return this.courses.slice();
  }

  createCourse(course: Course): void {
    this.courses.push(course);
    this.coursesChanged.emit(this.courses.slice());
  }

  getCourseById(id: string): Course | null {
    return this.courses.find(item => item.id === id) ?? null;
  }

  updateCourse(course: Course): void {
    const idx = this.courses.findIndex(item => item.id === course.id);
    if (idx !== -1) {
      this.courses[idx] = course;
      this.coursesChanged.emit(this.courses.slice());
    }
  }

  removeCourse(id: string): void {
    const idx = this.courses.findIndex(item => item.id === id);
    if (idx !== -1) {
      this.courses.splice(idx, 1);
      this.coursesChanged.emit(this.courses.slice());
    }
  }
}
