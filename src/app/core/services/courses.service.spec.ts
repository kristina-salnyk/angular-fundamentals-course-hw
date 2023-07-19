import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Course } from '../models/Course.model';

describe('CoursesService', () => {
  let service: CoursesService;
  let courses: Course[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);

    courses = [
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
        duration: 48,
        creationDate: new Date('08/23/2023'),
        topRated: true,
      },
    ];
    service.courses = [...courses];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCoursesList should return the list of courses', () => {
    const courses: Course[] = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'This is course 1',
        duration: 60,
        creationDate: new Date(),
        topRated: true,
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description: 'This is course 2',
        duration: 90,
        creationDate: new Date(),
        topRated: false,
      },
    ];
    service.courses = [...courses];

    const result = service.getCoursesList();

    expect(result).toEqual(courses);
  });

  it('#createCourse should create a new course', () => {
    const course: Course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description: 'This is course 1',
      duration: 60,
      creationDate: new Date(),
      topRated: true,
    };
    service.createCourse(course);

    expect(service.courses).toContain(course);
    expect(service.courses.length).toBe(courses.length + 1);
  });

  it('#getCourseById should retrieve a course by ID', () => {
    const courses: Course[] = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'This is course 1',
        duration: 60,
        creationDate: new Date(),
        topRated: true,
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description: 'This is course 2',
        duration: 90,
        creationDate: new Date(),
        topRated: false,
      },
    ];
    service.courses = [...courses];

    const result = service.getCourseById('2');

    expect(result).toEqual(courses[1]);
  });

  it('#getCourseById should return null if course is not found', () => {
    const courses: Course[] = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'This is course 1',
        duration: 60,
        creationDate: new Date(),
        topRated: true,
      },
    ];
    service.courses = [...courses];

    const result = service.getCourseById('2');

    expect(result).toBeNull();
  });

  it('#updateCourse should update a course', () => {
    const courses: Course[] = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'This is course 1',
        duration: 60,
        creationDate: new Date(),
        topRated: true,
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description: 'This is course 2',
        duration: 90,
        creationDate: new Date(),
        topRated: false,
      },
    ];
    service.courses = [...courses];

    const updatedCourse: Course = {
      id: '2',
      title: 'Video Course 2 (Updated). Name tag',
      description: 'This is the updated course 2',
      duration: 120,
      creationDate: new Date(),
      topRated: true,
    };
    service.updateCourse(updatedCourse);

    const result = service.getCourseById('2');

    expect(result).toEqual(updatedCourse);
  });

  it('#removeCourse should remove a course', () => {
    const courses: Course[] = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        description: 'This is course 1',
        duration: 60,
        creationDate: new Date(),
        topRated: true,
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        description: 'This is course 2',
        duration: 90,
        creationDate: new Date(),
        topRated: false,
      },
    ];
    service.courses = [...courses];

    service.removeCourse('2');

    const result = service.getCourseById('2');

    expect(result).toBeNull();
    expect(service.courses.length).toBe(1);
  });
});

describe('CoursesService class-only', () => {
  let service: CoursesService;
  let courses: Course[];

  beforeEach(() => {
    service = new CoursesService();
    courses = [
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
        duration: 48,
        creationDate: new Date('08/23/2023'),
        topRated: true,
      },
    ];
    service.courses = [...courses];
  });

  it('#getCoursesList should return the list of courses', () => {
    const result = service.getCoursesList();
    expect(result).toEqual(courses);
  });

  it('#createCourse should create a new course', () => {
    const course = {
      id: '4',
      title: 'Video Course 4. Name tag',
      description: 'This is a new course',
      duration: 60,
      creationDate: new Date(),
      topRated: false,
    };
    service.createCourse(course);
    expect(service.courses).toContain(course);
  });

  it('#createCourse should raise coursesChanged event', () => {
    const course = {
      id: '4',
      title: 'Video Course 4. Name tag',
      description: 'This is a new course',
      duration: 60,
      creationDate: new Date(),
      topRated: false,
    };
    spyOn(service.coursesChanged, 'emit');
    service.createCourse(course);
    expect(service.coursesChanged.emit).toHaveBeenCalled();
  });

  it('#getCourseById should retrieve a course by course id', () => {
    const course = courses[0];
    const result = service.getCourseById(course.id);
    expect(result).toEqual(course);
  });

  it('#updateCourse should update a course', () => {
    const course = {
      id: '2',
      title: 'Video Course 2 (Updated). Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 56,
      creationDate: new Date('04/03/2023'),
      topRated: false,
    };
    service.updateCourse(course);
    const result = service.getCourseById(course.id);
    expect(result).toEqual(course);
  });

  it('#updateCourse should raise coursesChanged event', () => {
    const course = {
      id: '2',
      title: 'Video Course 2 (Updated). Name tag',
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      duration: 56,
      creationDate: new Date('04/03/2023'),
      topRated: false,
    };
    spyOn(service.coursesChanged, 'emit');
    service.updateCourse(course);
    expect(service.coursesChanged.emit).toHaveBeenCalled();
  });

  it('#removeCourse should remove a course', () => {
    service.removeCourse('2');
    const result = service.getCourseById('2');
    expect(result).toBeNull();
  });

  it('#removeCourse should raise coursesChanged event', () => {
    spyOn(service.coursesChanged, 'emit');
    service.removeCourse('2');
    expect(service.coursesChanged.emit).toHaveBeenCalled();
  });
});
