import { describe, test, expect } from 'vitest';
import quickSort from './quickSort';

describe('sort array using quick sort algorithm', () => {
  test('sort numbers', () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([2, 3, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([10, 14, 28, 11, 7, 16, 30, 50, 25, 18])).toEqual([
      7, 10, 11, 14, 16, 18, 25, 28, 30, 50,
    ]);
  });

  test('sort strings', () => {
    expect(quickSort(['a', 'd', 'b', 'e', 'c'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
    expect(quickSort(['E', 'B', 'C', 'A', 'D'])).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
    ]);
    expect(quickSort(['a', 'A', 'b', 'C', 'c'])).toEqual([
      'A',
      'C',
      'a',
      'b',
      'c',
    ]);
    expect(quickSort(['This', 'is', 'a', 'Sorting', 'example'])).toEqual([
      'Sorting',
      'This',
      'a',
      'example',
      'is',
    ]);
  });

  test('sort with callback', () => {});
});
