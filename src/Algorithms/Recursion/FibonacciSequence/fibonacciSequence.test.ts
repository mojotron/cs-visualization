import { describe, test, expect } from 'vitest';
import fibonacciSequence from './fibonacciSequence';

describe('Fibonacci Sequence', () => {
  test('negative number should throw error, func is returning sequence', () => {
    expect(() => {
      fibonacciSequence(-1);
    }).toThrowError('input must be positive integer');
  });

  test('float number should throw error', () => {
    expect(() => {
      fibonacciSequence(2.1);
    }).toThrowError('input must be positive integer');
  });

  test('0 should return empty array', () => {
    expect(fibonacciSequence(0)).toEqual([]);
  });

  test('sequence length', () => {
    expect(fibonacciSequence(1)).toEqual([0]);
    expect(fibonacciSequence(2)).toEqual([0, 1]);
    expect(fibonacciSequence(3)).toEqual([0, 1, 1]);
    expect(fibonacciSequence(4)).toEqual([0, 1, 1, 2]);
    expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciSequence(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacciSequence(22)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946,
    ]);
  });
});
