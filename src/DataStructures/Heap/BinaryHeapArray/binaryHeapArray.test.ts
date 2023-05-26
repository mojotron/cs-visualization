import { describe, test, expect } from 'vitest';
import BinaryHeapArray from './binaryHeapArray';

describe('Binary Heap with Array implementation', () => {
  test('insertion', () => {
    const heap = BinaryHeapArray<string>(10);
    expect(heap.stringify()).toBe('');
    heap.insert(35, 'A');
    heap.insert(33, 'B');
    heap.insert(42, 'C');
    heap.insert(10, 'D');
    heap.insert(14, 'E');
    heap.insert(19, 'F');
    heap.insert(27, 'G');
    heap.insert(44, 'H');
    heap.insert(26, 'I');
    heap.insert(31, 'J');
    expect(() => {
      heap.insert(100, 'X');
    }).toThrowError('Heap max limit reached!');
    expect(heap.stringify()).toEqual('44 42 35 33 31 19 27 10 26 14');
    const h = heap.extract();
    expect(h).toBe('H');
    expect(heap.stringify()).toEqual('42 33 35 26 31 19 27 10 14');
    const c = heap.extract();
    expect(c).toBe('C');
    expect(heap.stringify()).toEqual('35 33 27 26 31 19 14 10');
    const a = heap.extract();
    expect(a).toBe('A');
    expect(heap.stringify()).toEqual('33 31 27 26 10 19 14');
    const b = heap.extract();
    expect(b).toBe('B');
    expect(heap.stringify()).toEqual('31 26 27 14 10 19');
    const j = heap.extract();
    expect(j).toBe('J');
    expect(heap.stringify()).toEqual('27 26 19 14 10');
    const g = heap.extract();
    expect(g).toBe('G');
    expect(heap.stringify()).toEqual('26 14 19 10');
    const i = heap.extract();
    expect(i).toBe('I');
    expect(heap.stringify()).toEqual('19 14 10');
    const f = heap.extract();
    expect(f).toBe('F');
    expect(heap.stringify()).toEqual('14 10');
    const e = heap.extract();
    expect(e).toBe('E');
    expect(heap.stringify()).toEqual('10');
    const d = heap.extract();
    expect(d).toBe('D');
    expect(heap.stringify()).toEqual('');
    const x = heap.extract();
    expect(x).toBe(undefined);
  });

  test('heap sort', () => {
    const heap = BinaryHeapArray<string>(10);

    const arr1 = [10, 20, 25, 6, 12, 15, 4, 16];
    heap.heapSort(arr1);
    expect(arr1).toEqual([4, 6, 10, 12, 15, 16, 20, 25]);

    const arr2 = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
    heap.heapSort(arr2);
    expect(arr2).toEqual([10, 14, 19, 26, 27, 31, 33, 35, 42, 44]);
  });
});
