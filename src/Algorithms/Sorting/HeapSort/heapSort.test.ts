import { describe, test, expect } from 'vitest';
import { buildMaxHeap, heapify, heapSort } from './heapSort';

describe('heap sort', () => {
  describe('heap sort building blocks', () => {
    test('heapify => maintain heap property', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3, 4, 5, 6];
      const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      heapify(arr1, arr1.length, 0);
      expect(arr1).toEqual([3, 2, 1]);
      heapify(arr2, arr2.length, 0);
      expect(arr2).toEqual([3, 2, 6, 4, 5, 1]);
      heapify(arr3, arr2.length, 0);
      expect(arr3).toEqual([3, 2, 6, 4, 5, 1, 7, 8, 9, 10]);
    });

    test('create max heap', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3, 4, 5, 6];
      const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      buildMaxHeap(arr1);
      expect(arr1).toEqual([3, 2, 1]);
      buildMaxHeap(arr2);
      expect(arr2).toEqual([6, 5, 3, 4, 2, 1]);
      buildMaxHeap(arr3);
      expect(arr3).toEqual([10, 9, 7, 8, 5, 6, 3, 1, 4, 2]);
    });
  });

  test('sort array of numbers', () => {
    const arr1 = [10, 20, 25, 6, 12, 15, 4, 16];
    heapSort(arr1);
    expect(arr1).toEqual([4, 6, 10, 12, 15, 16, 20, 25]);
    const arr2 = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
    heapSort(arr2);
    expect(arr2).toEqual([10, 14, 19, 26, 27, 31, 33, 35, 42, 44]);
    const arr3 = [2, 8, 5, 3, 9, 1];
    heapSort(arr3);
    expect(arr3).toEqual([1, 2, 3, 5, 8, 9]);
  });
});
