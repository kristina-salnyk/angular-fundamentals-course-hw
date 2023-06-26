import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "0h 00 min" for zero or negative values', () => {
    expect(pipe.transform(0)).toEqual('0h 00 min');
    expect(pipe.transform(-60)).toEqual('0h 00 min');
  });

  it('should return formatted duration for positive integer values', () => {
    expect(pipe.transform(88)).toEqual('1h 28 min');
    expect(pipe.transform(125)).toEqual('2h 05 min');
    expect(pipe.transform(45)).toEqual('45 min');
  });

  it('should return "0h 00 min" for negative or non-integer values', () => {
    expect(pipe.transform(-10)).toBe('0h 00 min');
    expect(pipe.transform(10.5)).toBe('0h 00 min');
  });

  it('should handle edge cases', () => {
    expect(pipe.transform(60)).toBe('1h 00 min');
    expect(pipe.transform(120)).toBe('2h 00 min');
    expect(pipe.transform(1)).toBe('01 min');
  });
});
