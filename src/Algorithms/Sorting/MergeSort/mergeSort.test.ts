import { describe, test, expect } from 'vitest';
import mergeSort from './mergeSort';

describe('sort array using merge sort algorithm', () => {
  test('sort numbers', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([2, 3, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([10, 14, 28, 11, 7, 16, 30, 50, 25, 18])).toEqual([
      7, 10, 11, 14, 16, 18, 25, 28, 30, 50,
    ]);
  });

  test('sort strings', () => {
    expect(mergeSort(['a', 'd', 'b', 'e', 'c'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
    expect(mergeSort(['E', 'B', 'C', 'A', 'D'])).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
    ]);
    expect(mergeSort(['a', 'A', 'b', 'C', 'c'])).toEqual([
      'A',
      'C',
      'a',
      'b',
      'c',
    ]);
    expect(mergeSort(['This', 'is', 'a', 'Sorting', 'example'])).toEqual([
      'Sorting',
      'This',
      'a',
      'example',
      'is',
    ]);
  });

  test('sort with callback', () => {});
});
