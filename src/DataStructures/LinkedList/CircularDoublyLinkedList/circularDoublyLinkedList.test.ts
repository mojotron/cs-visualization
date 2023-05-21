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

  describe('remove element', () => {
    test('remove from the beginning', () => {
      const list = CircularDoublyLinkedList<string>();
      list.append('A');
      list.append('B');
      list.append('C');
      list.append('D');
      const a = list.shift();
      expect(a).toBe('A');
      expect(list.print()).toBe('TAIL(D) <- B <-> C <-> D -> HEAD(B)');
      const b = list.shift();
      expect(b).toBe('B');
      expect(list.print()).toBe('TAIL(D) <- C <-> D -> HEAD(C)');
      const c = list.shift();
      expect(c).toBe('C');
      expect(list.print()).toBe('TAIL(D) <- D -> HEAD(D)');
      const d = list.shift();
      expect(d).toBe('D');
      expect(list.print()).toBe('empty');
    });

    test('remove from the end', () => {
      const list = CircularDoublyLinkedList<string>();
      list.append('A');
      list.append('B');
      list.append('C');
      list.append('D');
      const d = list.pop();
      expect(d).toBe('D');
      expect(list.print()).toBe('TAIL(C) <- A <-> B <-> C -> HEAD(A)');
      const c = list.pop();
      expect(c).toBe('C');
      expect(list.print()).toBe('TAIL(B) <- A <-> B -> HEAD(A)');
      const b = list.pop();
      expect(b).toBe('B');
      expect(list.print()).toBe('TAIL(A) <- A -> HEAD(A)');
      const a = list.pop();
      expect(a).toBe('A');
      expect(list.print()).toBe('empty');
    });

    test('remove from the middle', () => {
      const list = CircularDoublyLinkedList<string>();
      list.append('A');
      list.append('B');
      list.append('C');
      list.append('D');
      list.append('E');
      list.append('F');
      const c = list.deleteAt(2);
      expect(c).toBe('C');
      expect(list.print()).toBe(
        'TAIL(F) <- A <-> B <-> D <-> E <-> F -> HEAD(A)'
      );
      // invalid index return s undefined
      const x = list.deleteAt(-1);
      const y = list.deleteAt(5); // last element is length - 1 (4)
      expect(x).toBe(undefined);
      expect(y).toBe(undefined);
      expect(list.print()).toBe(
        'TAIL(F) <- A <-> B <-> D <-> E <-> F -> HEAD(A)'
      );
      const a = list.deleteAt(0);
      expect(a).toBe('A');
      expect(list.print()).toBe('TAIL(F) <- B <-> D <-> E <-> F -> HEAD(B)');
      const e = list.deleteAt(2);
      expect(e).toBe('E');
      expect(list.print()).toBe('TAIL(F) <- B <-> D <-> F -> HEAD(B)');
      const d = list.deleteAt(1);
      expect(d).toBe('D');
      expect(list.print()).toBe('TAIL(F) <- B <-> F -> HEAD(B)');
      const f = list.deleteAt(1);
      expect(f).toBe('F');
      expect(list.print()).toBe('TAIL(B) <- B -> HEAD(B)');
      const b = list.deleteAt(0);
      expect(b).toBe('B');
      expect(list.print()).toBe('empty');
    });
  });

  describe('reverse', () => {
    test('create new reversed CDLL', () => {
      const list = CircularDoublyLinkedList<string>();
      list.append('A');
      list.append('B');
      list.append('C');
      list.append('D');
      list.append('E');
      list.append('F');
      const newReversed = list.reverse();
      expect(newReversed?.print()).toBe(
        'TAIL(A) <- F <-> E <-> D <-> C <-> B <-> A -> HEAD(F)'
      );
    });

    test.skip('reverse in place', () => {
      const list = CircularDoublyLinkedList<string>();
      list.append('A');
      list.append('B');
      list.append('C');
      list.append('D');
      list.append('E');
      list.append('F');
      list.reverse();
      expect(list.print()).toBe(
        'TAIL(A) <- F <-> E <-> D <-> C <-> B <-> A -> HEAD(F)'
      );
    });
  });
});
