import { describe, test, expect } from 'vitest';
import PriorityQueueArray from './priorityQueueArray';

describe('Priority Queue', () => {
  test('is empty', () => {
    const pq = PriorityQueueArray<string>();
    expect(pq.isEmpty()).toBe(true);
    pq.insert(10, 'A');
    expect(pq.isEmpty()).toBe(false);
  });

  test('insert node', () => {
    const pq = PriorityQueueArray<string>();
    expect(pq.size).toBe(0);
    pq.insert(10, 'A');
    expect(pq.size).toBe(1);
    expect(pq.peek()).toBe('A');
    // same priority first in first out
    pq.insert(10, 'X');
    expect(pq.size).toBe(2);
    expect(pq.peek()).toBe('A');
    pq.insert(20, 'B');
    expect(pq.size).toBe(3);
    expect(pq.peek()).toBe('B');
    pq.insert(5, 'C');
    expect(pq.size).toBe(4);
    expect(pq.peek()).toBe('B');
    pq.insert(25, 'D');
    expect(pq.size).toBe(5);
    expect(pq.peek()).toBe('D');
  });

  test('pull out top priority element', () => {
    const pq = PriorityQueueArray<string>();
    expect(pq.size).toBe(0);
    pq.insert(10, 'A');
    pq.insert(20, 'B');
    pq.insert(5, 'C');
    pq.insert(25, 'D');
    expect(pq.size).toBe(4);
    const d = pq.pull();
    expect(d).toBe('D');
    expect(pq.size).toBe(3);
    const b = pq.pull();
    expect(b).toBe('B');
    expect(pq.size).toBe(2);
    const a = pq.pull();
    expect(a).toBe('A');
    expect(pq.size).toBe(1);
    const c = pq.pull();
    expect(c).toBe('C');
    expect(pq.size).toBe(0);
    const x = pq.pull();
    expect(x).toBe(undefined);
  });
});
