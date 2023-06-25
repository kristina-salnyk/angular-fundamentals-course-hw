import { formatDurationToString } from './formatDurationToString';

describe('formatDurationToString', () => {
  it('should return the correct formatted duration for positive integer values', () => {
    const result = formatDurationToString(88);
    expect(result).toEqual('1h 28 min');
  });

  it('should return "0h 00 min" for zero or negative values', () => {
    const result1 = formatDurationToString(0);
    expect(result1).toEqual('0h 00 min');

    const result2 = formatDurationToString(-60);
    expect(result2).toEqual('0h 00 min');
  });

  it('should return "0h 00 min" for non-integer values', () => {
    const result1 = formatDurationToString(60.5);
    expect(result1).toEqual('0h 00 min');

    const result2 = formatDurationToString(-80.3);
    expect(result2).toEqual('0h 00 min');
  });

  it('should handle edge cases', () => {
    const result1 = formatDurationToString(60);
    expect(result1).toEqual('1h 00 min');

    const result2 = formatDurationToString(120);
    expect(result2).toEqual('2h 00 min');

    const result3 = formatDurationToString(1);
    expect(result3).toEqual('0h 01 min');
  });
});
