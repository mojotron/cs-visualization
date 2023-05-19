import { describe, test, expect } from 'vitest';
import CircularDoublyLinkedList from './circularDoublyLinkedList';

describe('Circular Doubly Linked List', () => {
  describe('add element', () => {
    test('add element at the beginning', () => {
      const list = CircularDoublyLinkedList<string>();
      expect(list.print()).toBe('empty');
      console.log(list.print());
      list.prepend('A');
      expect(list.print()).toBe('TAIL(A) <- A -> HEAD(A)');
      console.log(list.print());
    });
  });
});
