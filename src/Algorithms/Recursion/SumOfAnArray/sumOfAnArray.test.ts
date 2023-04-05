import { describe, test, expect } from 'vitest';
import sumOfAnArray from './sumOfAnArray';

describe('Calculate sum from array of numbers', () => {
  test('empty array returns 0', () => {
    expect(sumOfAnArray([])).toBe(0);
  });

  test('array of positive numbers', () => {
    expect(sumOfAnArray([1, 2, 3])).toBe(6);
    expect(sumOfAnArray([15, 8, 4, 20])).toBe(47);
    expect(sumOfAnArray([5, 33, 126, 89, 1])).toBe(254);
  });

  test('array of negative numbers', () => {
    expect(sumOfAnArray([-2, -8, -3])).toBe(-13);
    expect(sumOfAnArray([-45, -19, -5, -214])).toBe(-283);
    expect(sumOfAnArray([-91, -37, -12, -48, -62])).toBe(-250);
  });

  test('array of positive numbers', () => {
    expect(sumOfAnArray([1.1, 2.2, 3.3])).toBe(6.6);
    expect(sumOfAnArray([4.5, 9.4, 4.8, 1.7])).toBe(20.4);
    expect(sumOfAnArray([7.8, 6.1, 1.5, 3.2, 6.7])).toBe(25.3);
  });

  test('array of mixed numbers', () => {
    expect(sumOfAnArray([1, -2, 3.67])).toBe(2.67);
    expect(sumOfAnArray([14, -3.25, 8, -16])).toBe(2.75);
    expect(sumOfAnArray([-0.25, 1.75, 2, -1, 10])).toBe(12.5);
  });
});
