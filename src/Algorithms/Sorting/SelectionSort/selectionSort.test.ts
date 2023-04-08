import { describe, test, expect } from 'vitest';
import selectionSort from './selectionSort';

describe('sort array using selection sort algorithm', () => {
  test('sort numbers', () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([2, 3, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sort strings', () => {
    expect(selectionSort(['a', 'd', 'b', 'e', 'c'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
    expect(selectionSort(['E', 'B', 'C', 'A', 'D'])).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
    ]);
    expect(selectionSort(['a', 'A', 'b', 'C', 'c'])).toEqual([
      'A',
      'C',
      'a',
      'b',
      'c',
    ]);
    expect(selectionSort(['This', 'is', 'a', 'Sorting', 'example'])).toEqual([
      'Sorting',
      'This',
      'a',
      'example',
      'is',
    ]);
  });

  test('sort with callback', () => {});
});
