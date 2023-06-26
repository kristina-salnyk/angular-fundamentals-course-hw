import { getDaysBetweenDates } from './getDaysBetweenDates';

describe('getDaysBetweenDates', () => {
  it('should calculate the correct number of days between two dates', () => {
    const fromDate = new Date('06/20/2023');
    const toDate = new Date('06/25/2023');

    expect(getDaysBetweenDates(fromDate, toDate)).toEqual(5);
  });

  it('should return 0 if the two dates are the same', () => {
    const fromDate = new Date('06/20/2023');
    const toDate = new Date('06/20/2023');

    expect(getDaysBetweenDates(fromDate, toDate)).toEqual(0);
  });

  it('should handle negative time differences by returning the absolute number of days', () => {
    const fromDate = new Date('2023-06-25');
    const toDate = new Date('2023-06-20');

    expect(getDaysBetweenDates(fromDate, toDate)).toEqual(5);
  });
});
