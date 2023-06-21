const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function getDaysBetweenDates(fromDate: Date, toDate: Date): number {
  const timeDiff = Math.abs(toDate.getTime() - fromDate.getTime());
  return Math.floor(timeDiff / MS_PER_DAY);
}
