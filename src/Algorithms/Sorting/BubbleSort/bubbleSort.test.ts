import { describe, test, expect } from 'vitest';
import bubbleSort from './bubbleSort';

describe('sort array using bubble sort algorithm', () => {
  test('sort numbers', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([2, 3, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sort strings', () => {
    expect(bubbleSort(['a', 'd', 'b', 'e', 'c'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
    expect(bubbleSort(['E', 'B', 'C', 'A', 'D'])).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
    ]);
    expect(bubbleSort(['a', 'A', 'b', 'C', 'c'])).toEqual([
      'A',
      'C',
      'a',
      'b',
      'c',
    ]);
    expect(bubbleSort(['This', 'is', 'a', 'Sorting', 'example'])).toEqual([
      'Sorting',
      'This',
      'a',
      'example',
      'is',
    ]);
  });

  test('sort with callback', () => {});
});
