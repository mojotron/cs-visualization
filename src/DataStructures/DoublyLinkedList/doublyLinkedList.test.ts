import { describe, test, expect } from 'vitest';
import DoublyLinkedList from './doublyLinkedList';

describe('Doubly Linked List implementation', () => {
  test('initialize new list', () => {
    const list = DoublyLinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });

  describe('insertion', () => {
    test('insert to the beginning', () => {
      const list = DoublyLinkedList<string>();
      list.prepend('a');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('a');
      expect(list.length).toBe(1);
      list.prepend('b');
      expect(list.head).toBe('b');
      expect(list.tail).toBe('a');
      expect(list.length).toBe(2);
      list.prepend('c');
      expect(list.head).toBe('c');
      expect(list.tail).toBe('a');
      expect(list.length).toBe(3);
      const fromHead: string[] = [];
      list.forEach('head', (v) => fromHead.push(v));
      expect(fromHead).toEqual(['c', 'b', 'a']);
      const fromTail: string[] = [];
      list.forEach('tail', (v) => fromTail.push(v));
      expect(fromTail).toEqual(['a', 'b', 'c']);
    });

    test('insert to the end', () => {
      const list = DoublyLinkedList<string>();
      list.append('a');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('a');
      expect(list.length).toBe(1);
      list.append('b');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('b');
      expect(list.length).toBe(2);
      list.append('c');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('c');
      expect(list.length).toBe(3);
      const fromHead: string[] = [];
      list.forEach('head', (v) => fromHead.push(v));
      expect(fromHead).toEqual(['a', 'b', 'c']);
      const fromTail: string[] = [];
      list.forEach('tail', (v) => fromTail.push(v));
      expect(fromTail).toEqual(['c', 'b', 'a']);
    });

    test('insert new node', () => {
      const list = DoublyLinkedList<string>();
      list.insert(0, 'a');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('a');
      list.insert(1, 'b');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('b');
      // should not insert if index less then 0 or greater then length
      list.insert(-1, 'c');
      list.insert(3, 'c');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('b');
      expect(list.length).toBe(2);
      list.insert(1, 'c');
      list.insert(1, 'd');
      list.insert(2, 'f');
      const fromHead: string[] = [];
      list.forEach('head', (v) => fromHead.push(v));
      expect(fromHead).toEqual(['a', 'd', 'f', 'c', 'b']);
      const fromTail: string[] = [];
      list.forEach('tail', (v) => fromTail.push(v));
      expect(fromTail).toEqual(['b', 'c', 'f', 'd', 'a']);
      expect(list.length).toBe(5);
    });
  });
});
