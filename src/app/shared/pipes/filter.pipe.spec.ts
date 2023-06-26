import { FilterPipe } from './filter.pipe';
import { Course } from '../../core/models/Course.model';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  let courses: Course[];

  beforeEach(() => {
    pipe = new FilterPipe();
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
        duration: 88,
        creationDate: new Date('08/22/2023'),
        topRated: false,
      },
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter courses by id', () => {
    const filteredCourses = pipe.transform(courses, 'id', '2');

    expect(filteredCourses.length).toBe(1);
    expect(filteredCourses).toEqual([courses[1]]);
  });

  it('should filter courses by title', () => {
    const filteredCourses = pipe.transform(
      courses,
      'title',
      'Video Course 3. Name tag'
    );

    expect(filteredCourses.length).toBe(1);
    expect(filteredCourses).toEqual([courses[2]]);
  });

  it('should filter courses by description', () => {
    const filteredCourses = pipe.transform(
      courses,
      'description',
      'course catalogs'
    );

    expect(filteredCourses.length).toBe(3);
    expect(filteredCourses).toEqual(courses);
  });

  it('should return an empty array when no match is found', () => {
    const filteredCourses = pipe.transform(courses, 'title', 'Video Course 10');

    expect(filteredCourses.length).toBe(0);
    expect(filteredCourses).toEqual([]);
  });

  it('should return the original array when filter is an empty string', () => {
    const filteredCourses = pipe.transform(courses, 'title', '');

    expect(filteredCourses.length).toBe(courses.length);
    expect(filteredCourses).toEqual(courses);
  });
});
