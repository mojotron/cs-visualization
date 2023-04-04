import { describe, test, expect } from 'vitest';
import sumAllNumbers from './sumAllNumbers';

describe('Sum all numbers with recursive function', () => {
  test('invalid input throw error', () => {
    expect(() => {
      sumAllNumbers(8.1);
    }).toThrowError('input must be integer');
  });

  test('0 and 1 returns same input', () => {
    expect(sumAllNumbers(0)).toBe(0);
    expect(sumAllNumbers(1)).toBe(1);
  });

  test('positive numbers', () => {
    expect(sumAllNumbers(3)).toBe(6);
    expect(sumAllNumbers(5)).toBe(15);
    expect(sumAllNumbers(10)).toBe(55);
    expect(sumAllNumbers(15)).toBe(120);
  });

  test('negative numbers', () => {
    expect(sumAllNumbers(-3)).toBe(-6);
    expect(sumAllNumbers(-5)).toBe(-15);
    expect(sumAllNumbers(-10)).toBe(-55);
    expect(sumAllNumbers(-15)).toBe(-120);
  });
});
