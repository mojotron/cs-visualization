import { describe, test, expect } from 'vitest';
import collatzConjecture from './collatzConjecture';

describe('calculate how many steps it takes to get number 1', () => {
  test('incorrect input should throw error', () => {
    expect(() => {
      collatzConjecture(-1);
    }).toThrowError('input must be integer greater then the 0');

    expect(() => {
      collatzConjecture(0);
    }).toThrowError('input must be integer greater then the 0');
  });

  test('positive integers', () => {
    expect(collatzConjecture(1)).toBe(0);
    expect(collatzConjecture(2)).toBe(1);
    expect(collatzConjecture(3)).toBe(7);
    expect(collatzConjecture(4)).toBe(2);
    expect(collatzConjecture(5)).toBe(5);
    expect(collatzConjecture(6)).toBe(8);
    expect(collatzConjecture(7)).toBe(16);
    expect(collatzConjecture(8)).toBe(3);
    expect(collatzConjecture(15)).toBe(17);
    expect(collatzConjecture(27)).toBe(111);
    expect(collatzConjecture(50)).toBe(24);
  });
});
