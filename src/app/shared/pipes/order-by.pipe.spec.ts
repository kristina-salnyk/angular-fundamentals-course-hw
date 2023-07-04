import { OrderByPipe } from './order-by.pipe';
import { Course } from '../../core/models/Course.model';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  let courses: Course[];

  beforeEach(() => {
    pipe = new OrderByPipe();
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
        duration: 89,
        creationDate: new Date('08/22/2023'),
        topRated: false,
      },
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order courses in descending order by specified key', () => {
    const sortedCourses = pipe.transform(courses, 'duration');

    expect(sortedCourses[0]).toEqual(courses[2]);
    expect(sortedCourses[1]).toEqual(courses[0]);
    expect(sortedCourses[2]).toEqual(courses[1]);
  });

  it('should handle an empty array of courses', () => {
    const sortedCourses = pipe.transform([], 'title');
    expect(sortedCourses).toEqual([]);
  });
});
