import { describe, test, expect } from 'vitest';
import SinglyLinkedList from './singlyLinkedList';

describe('Singly Link List', () => {
  test('create link list using factory function', () => {
    const list = SinglyLinkedList<string>();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  describe('insertion', () => {
    test('insert at the beginning', () => {
      const list = SinglyLinkedList<string>();
      list.prepend('a');
      expect(list.length).toBe(1);
      expect(list.head).toBe('a');
      expect(list.tail).toBe('a');
      list.prepend('b');
      expect(list.length).toBe(2);
      expect(list.head).toBe('b');
      expect(list.tail).toBe('a');
      list.prepend('c');
      expect(list.length).toBe(3);
      expect(list.head).toBe('c');
      expect(list.tail).toBe('a');
      list.prepend('d');
      list.prepend('e');
      const values: string[] = [];
      list.forEach((v) => {
        values.push(v);
      });
      expect(values).toEqual(['e', 'd', 'c', 'b', 'a']);
    });

    test('insert at the end', () => {
      const list = SinglyLinkedList<string>();
      list.append('a');
      expect(list.length).toBe(1);
      expect(list.head).toBe('a');
      expect(list.tail).toBe('a');
      list.append('b');
      expect(list.length).toBe(2);
      expect(list.head).toBe('a');
      expect(list.tail).toBe('b');
      list.append('c');
      expect(list.length).toBe(3);
      expect(list.head).toBe('a');
      expect(list.tail).toBe('c');
      list.append('d');
      list.append('e');
      const values: string[] = [];
      list.forEach((v) => {
        values.push(v);
      });
      expect(values).toEqual(['a', 'b', 'c', 'd', 'e']);
    });

    test('insert new node', () => {
      const list = SinglyLinkedList<string>();
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
      const values: string[] = [];
      list.forEach((v) => {
        values.push(v);
      });
      expect(values).toEqual(['a', 'd', 'f', 'c', 'b']);
    });
    test('mix insertion methods', () => {
      const list = SinglyLinkedList<string>();
      list.append('a');
      list.append('b');
      list.prepend('c');
      list.insert(0, 'd');
      list.prepend('e');
      list.insert(3, 'f');
      list.insert(6, 'g');
      const values: string[] = [];
      list.forEach((v) => {
        values.push(v);
      });
      expect(values).toEqual(['e', 'd', 'c', 'f', 'a', 'b', 'g']);
    });
  });

  describe('deletion', () => {
    test('delete from the beginning', () => {});
    test('delete from the end', () => {});
    test('delete from the middle', () => {});
  });
  // describe('search', () => {});
  // describe('traversal', () => {});
  // describe('search', () => {});
});
