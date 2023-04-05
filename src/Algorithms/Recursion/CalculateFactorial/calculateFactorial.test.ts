import { describe, test, expect } from 'vitest';
import calculateFactorial from './calculateFactorial';

describe('Calculate factorials with recursion', () => {
  test('negative integer', () => {
    expect(() => {
      calculateFactorial(-2);
    }).toThrowError('input must be integer >= 0');
  });

  test('float number', () => {
    expect(() => {
      calculateFactorial(2.2);
    }).toThrowError('input must be integer not float');
  });

  test('factorial 0 is 1', () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  test('factorial 1 is 1', () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  test('factorial of positive numbers', () => {
    expect(calculateFactorial(2)).toBe(2);
    expect(calculateFactorial(3)).toBe(6);
    expect(calculateFactorial(4)).toBe(24);
    expect(calculateFactorial(5)).toBe(120);
    expect(calculateFactorial(6)).toBe(720);
  });
});
