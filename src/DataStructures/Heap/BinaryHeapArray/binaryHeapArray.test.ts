import { describe, test, expect } from 'vitest';
import BinaryHeapArray from './binaryHeapArray';

describe('Binary Heap with Array implementation', () => {
  test('insertion', () => {
    const heap = BinaryHeapArray<string>(5);
    expect(heap.print()).toBe('');
  });
});
