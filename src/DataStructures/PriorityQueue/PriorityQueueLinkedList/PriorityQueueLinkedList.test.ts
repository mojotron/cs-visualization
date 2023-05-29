import { describe, test, expect } from 'vitest';
import PriorityQueueLinkedList from './PriorityQueueLinkedList';

describe('Priority Queue', () => {
  test('is empty', () => {
    const pq = PriorityQueueLinkedList<string>();
    expect(pq.isEmpty()).toBe(true);
    pq.insert(10, 'A');
    expect(pq.isEmpty()).toBe(false);
  });

  test('insert node', () => {
    const pq = PriorityQueueLinkedList<string>();
    pq.insert(1, 'A');
    expect(pq.size).toBe(1);
    expect(pq.peek()).toBe('A');
    pq.insert(3, 'B');
    expect(pq.size).toBe(2);
    expect(pq.peek()).toBe('B');
    pq.insert(2, 'C');
    expect(pq.peek()).toBe('B');
    pq.insert(5, 'D');
    expect(pq.peek()).toBe('D');
    pq.insert(4, 'E');
    expect(pq.peek()).toBe('D');
    pq.insert(5, 'X');
    expect(pq.peek()).toBe('D');
    pq.insert(6, 'G');
    expect(pq.peek()).toBe('G');
    pq.insert(7, 'F');
    expect(pq.peek()).toBe('F');
    pq.insert(0, 'H');
    expect(pq.size).toBe(9);
    expect(pq.peek()).toBe('F');
  });

  test('pull out top priority element', () => {
    const pq = PriorityQueueLinkedList<string>();
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
