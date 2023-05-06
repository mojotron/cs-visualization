import { describe, test, expect } from 'vitest';
import quickSort from './quickSort';

describe('sort array using quick sort algorithm', () => {
  test('sort numbers', () => {
    const arr1: number[] = [];
    const arr2 = [1, 2, 3, 4, 5];
    const arr3 = [2, 3, 1, 4, 5];
    const arr4 = [2, 4, 1, 3, 5];
    const arr5 = [5, 4, 3, 2, 1];
    const arr6 = [10, 14, 28, 11, 7, 16, 30, 50, 25, 18];
    quickSort(arr1);
    expect(arr1).toEqual([]);
    quickSort(arr2);
    expect(arr2).toEqual([1, 2, 3, 4, 5]);
    quickSort(arr3);
    expect(arr3).toEqual([1, 2, 3, 4, 5]);
    quickSort(arr4);
    expect(arr4).toEqual([1, 2, 3, 4, 5]);
    quickSort(arr5);
    expect(arr5).toEqual([1, 2, 3, 4, 5]);
    quickSort(arr6);
    expect(arr6).toEqual([7, 10, 11, 14, 16, 18, 25, 28, 30, 50]);
  });

  test('sort strings', () => {
    const arr1 = ['a', 'd', 'b', 'e', 'c'];
    const arr2 = ['E', 'B', 'C', 'A', 'D'];
    const arr3 = ['a', 'A', 'b', 'C', 'c'];
    const arr4 = ['This', 'is', 'a', 'Sorting', 'example'];

    quickSort(arr1);
    expect(arr1).toEqual(['a', 'b', 'c', 'd', 'e']);
    quickSort(arr2);
    expect(arr2).toEqual(['A', 'B', 'C', 'D', 'E']);
    quickSort(arr3);
    expect(arr3).toEqual(['A', 'C', 'a', 'b', 'c']);
    quickSort(arr4);
    expect(arr4).toEqual(['Sorting', 'This', 'a', 'example', 'is']);
  });

  test('sort with callback', () => {});
});
