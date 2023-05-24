import { describe, test, expect } from 'vitest';
import BinaryHeapArray from './binaryHeapArray';

describe('Binary Heap with Array implementation', () => {
  test('insertion', () => {
    const heap = BinaryHeapArray<string>('max', 11);
    expect(heap.print()).toBe('');
    heap.insert(1, 'a');
    heap.insert(3, 'b');
    heap.insert(5, 'c');
    heap.insert(4, 'd');
    heap.insert(6, 'e');
    heap.insert(13, 'f');
    heap.insert(10, 'g');
    heap.insert(9, 'h');
    heap.insert(8, 'i');
    heap.insert(15, 'j');
    heap.insert(17, 'l');
    console.log(heap.print());
  });
});
