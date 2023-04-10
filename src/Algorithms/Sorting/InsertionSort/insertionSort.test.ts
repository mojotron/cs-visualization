import { describe, test, expect } from 'vitest';
import insertionSort from './insertionSort';

describe('sort array using insertion sort algorithm', () => {
  test('sort numbers', () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([2, 3, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sort strings', () => {
    expect(insertionSort(['a', 'd', 'b', 'e', 'c'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
    expect(insertionSort(['E', 'B', 'C', 'A', 'D'])).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
    ]);
    expect(insertionSort(['a', 'A', 'b', 'C', 'c'])).toEqual([
      'A',
      'C',
      'a',
      'b',
      'c',
    ]);
    expect(insertionSort(['This', 'is', 'a', 'Sorting', 'example'])).toEqual([
      'Sorting',
      'This',
      'a',
      'example',
      'is',
    ]);
  });

  test('sort with callback', () => {});
});
