import { describe, test, expect } from 'vitest';
import Queue from './queue';

describe('queue DS implementation', () => {
  test('initialize queue', () => {
    const queue = Queue<string>(5);
    expect(queue.size()).toBe(0);
    expect(queue.front()).toBe(undefined);
    expect(queue.rear()).toBe(undefined);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.isFull()).toBe(false);
  });

  test('enqueue operations', () => {
    const queue = Queue<string>(3);
    queue.enqueue('a');
    expect(queue.size()).toBe(1);
    expect(queue.front()).toBe('a');
    expect(queue.rear()).toBe('a');
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(false);
    queue.enqueue('b');
    expect(queue.size()).toBe(2);
    expect(queue.front()).toBe('a');
    expect(queue.rear()).toBe('b');
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(false);
    queue.enqueue('c');
    expect(queue.size()).toBe(3);
    expect(queue.front()).toBe('a');
    expect(queue.rear()).toBe('c');
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(true);
    expect(() => {
      queue.enqueue('c');
    }).toThrowError(`queue is full, max size(3), current size(3)`);
  });

  test('queue pop operations', () => {
    const queue = Queue<string>(3);
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    const a = queue.dequeue();
    expect(a).toBe('a');
    expect(queue.size()).toBe(2);
    expect(queue.front()).toBe('b');
    expect(queue.rear()).toBe('c');
    expect(queue.isEmpty()).toBe(false);
    const b = queue.dequeue();
    expect(b).toBe('b');
    expect(queue.size()).toBe(1);
    expect(queue.front()).toBe('c');
    expect(queue.rear()).toBe('c');
    expect(queue.isEmpty()).toBe(false);
    const c = queue.dequeue();
    expect(c).toBe('c');
    expect(queue.size()).toBe(0);
    expect(queue.front()).toBe(undefined);
    expect(queue.rear()).toBe(undefined);
    expect(queue.isEmpty()).toBe(true);

    const x = queue.dequeue();
    expect(x).toBe(undefined);
  });
});
