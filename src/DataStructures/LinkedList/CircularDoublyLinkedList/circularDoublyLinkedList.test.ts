import { describe, test, expect } from 'vitest';
import CircularDoublyLinkedList from './circularDoublyLinkedList';

describe('Circular Doubly Linked List', () => {
  describe('add element', () => {
    test('add element at the beginning', () => {
      const list = CircularDoublyLinkedList<string>();
      expect(list.print()).toBe('empty');
      list.prepend('A');
      expect(list.print()).toBe('TAIL(A) <- A -> HEAD(A)');
      list.prepend('B');
      expect(list.print()).toBe('TAIL(A) <- B <-> A -> HEAD(B)');
      list.prepend('C');
      expect(list.print()).toBe('TAIL(A) <- C <-> B <-> A -> HEAD(C)');
      list.prepend('D');
      expect(list.print()).toBe('TAIL(A) <- D <-> C <-> B <-> A -> HEAD(D)');
    });

    test('add element at the beginning', () => {
      const list = CircularDoublyLinkedList<string>();
      expect(list.print()).toBe('empty');
      list.append('A');
      expect(list.print()).toBe('TAIL(A) <- A -> HEAD(A)');
      list.append('B');
      expect(list.print()).toBe('TAIL(B) <- A <-> B -> HEAD(A)');
      list.append('C');
      expect(list.print()).toBe('TAIL(C) <- A <-> B <-> C -> HEAD(A)');
      list.append('D');
      expect(list.print()).toBe('TAIL(D) <- A <-> B <-> C <-> D -> HEAD(A)');
    });

    test('insert in the middle', () => {
      const list = CircularDoublyLinkedList<string>();

      list.insert(0, 'A');
      expect(list.print()).toBe('TAIL(A) <- A -> HEAD(A)');
      list.insert(1, 'B');
      expect(list.print()).toBe('TAIL(B) <- A <-> B -> HEAD(A)');
      // should not insert if index less then 0 or greater then length
      list.insert(-1, 'C');
      expect(list.print()).toBe('TAIL(B) <- A <-> B -> HEAD(A)');
      list.insert(3, 'C');
      expect(list.print()).toBe('TAIL(B) <- A <-> B -> HEAD(A)');
      //
      list.insert(1, 'C');
      expect(list.print()).toBe('TAIL(B) <- A <-> C <-> B -> HEAD(A)');
      list.insert(1, 'D');
      expect(list.print()).toBe('TAIL(B) <- A <-> D <-> C <-> B -> HEAD(A)');
      list.insert(2, 'E');
      expect(list.print()).toBe(
        'TAIL(B) <- A <-> D <-> E <-> C <-> B -> HEAD(A)'
      );
    });
  });
});
