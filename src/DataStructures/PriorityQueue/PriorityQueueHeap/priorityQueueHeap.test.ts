import { describe, test, expect } from 'vitest';
import PriorityQueueHeap from './priorityQueueHeap';

describe('Priority Queue, Heap Implementation', () => {
  test('isEmpty', () => {
    const pq = PriorityQueueHeap<string>();
    expect(pq.isEmpty()).toBe(true);
    pq.insert(1, 'A');
    expect(pq.isEmpty()).toBe(false);
    pq.pull();
    expect(pq.isEmpty()).toBe(true);
  });

  test('insert', () => {
    const pq = PriorityQueueHeap<string>();
    expect(pq.size).toBe(0);

    pq.insert(4, 'A');
    expect(pq.size).toBe(1);
    expect(pq.peek()).toBe('A');

    pq.insert(5, 'B');
    expect(pq.size).toBe(2);
    expect(pq.peek()).toBe('A');

    pq.insert(3, 'C');
    expect(pq.size).toBe(3);
    expect(pq.peek()).toBe('C');

    pq.insert(3, 'D');
    expect(pq.size).toBe(4);
    expect(pq.peek()).toBe('C');

    pq.insert(3, 'E');
    expect(pq.size).toBe(5);
    expect(pq.peek()).toBe('C');

    pq.insert(2, 'F');
    expect(pq.size).toBe(6);
    expect(pq.peek()).toBe('F');

    pq.insert(6, 'G');
    expect(pq.size).toBe(7);
    expect(pq.peek()).toBe('F');

    pq.insert(1, 'H');
    expect(pq.size).toBe(8);
    expect(pq.peek()).toBe('H');
  });

  test('pull minimum value out', () => {});
});
