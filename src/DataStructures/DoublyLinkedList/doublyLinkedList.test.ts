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

  describe('deletion', () => {
    test('remove from beginning', () => {
      const list = DoublyLinkedList();
      list.append('a');
      list.append('b');
      list.append('c');
      const a = list.shift();
      expect(a).toBe('a');
      expect(list.head).toBe('b');
      expect(list.tail).toBe('c');
      expect(list.length).toBe(2);
      const b = list.shift();
      expect(b).toBe('b');
      expect(list.head).toBe('c');
      expect(list.tail).toBe('c');
      expect(list.length).toBe(1);
      const c = list.shift();
      expect(c).toBe('c');
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
      const x = list.shift();
      expect(x).toBe(undefined);
    });

    test('remove from the end', () => {
      const list = DoublyLinkedList();
      list.append('a');
      list.append('b');
      list.append('c');
      const c = list.pop();
      expect(c).toBe('c');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('b');
      expect(list.length).toBe(2);
      const b = list.pop();
      expect(b).toBe('b');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('a');
      expect(list.length).toBe(1);
      const a = list.pop();
      expect(a).toBe('a');
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
      const x = list.pop();
      expect(x).toBe(undefined);
    });

    test('remove from the middle', () => {
      const list = DoublyLinkedList();
      list.append('a');
      list.append('b');
      list.append('c');
      list.append('d');
      list.append('e');

      const underLength = list.deleteAt(-1); // 0 based

      expect(underLength).toBe(undefined);
      const overLength = list.deleteAt(5); // 0 based
      expect(overLength).toBe(undefined);

      expect(list.length).toBe(5);
      const b = list.deleteAt(1);
      expect(b).toBe('b');
      expect(list.head).toBe('a');
      expect(list.tail).toBe('e');
      expect(list.length).toBe(4);
      const d = list.deleteAt(2);
      expect(d).toBe('d');

      expect(list.head).toBe('a');
      expect(list.tail).toBe('e');
      expect(list.length).toBe(3);
      const a = list.deleteAt(0);

      expect(a).toBe('a');
      expect(list.head).toBe('c');
      expect(list.tail).toBe('e');
      expect(list.length).toBe(2);
      const e = list.deleteAt(1);

      expect(e).toBe('e');
      expect(list.tail).toBe('c');
      expect(list.head).toBe('c');
      expect(list.length).toBe(1);

      const c = list.deleteAt(0);
      expect(c).toBe('c');
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);

      const x = list.deleteAt(0);
      expect(x).toBe(undefined);
    });
  });

  describe('search', () => {
    test('search in objects', () => {
      const list = DoublyLinkedList<{
        userName: string;
        age: number;
        premium: boolean;
      }>();
      list.append({ userName: 'Bob', age: 35, premium: true });
      list.append({ userName: 'Sara', age: 20, premium: true });
      list.append({ userName: 'Mike', age: 24, premium: false });
      const hasSara = list.search('head', (ele) => ele.userName === 'Sara');
      expect(hasSara).toEqual({
        userName: 'Sara',
        age: 20,
        premium: true,
      });
      const age24 = list.search('head', (ele) => ele.age === 24);
      expect(age24).toEqual({ userName: 'Mike', age: 24, premium: false });
      const firstPremiumHead = list.search(
        'head',
        (ele) => ele.premium === true
      );
      expect(firstPremiumHead).toEqual({
        userName: 'Bob',
        age: 35,
        premium: true,
      });
      const firstPremiumTail = list.search(
        'tail',
        (ele) => ele.premium === true
      );
      expect(firstPremiumTail).toEqual({
        userName: 'Sara',
        age: 20,
        premium: true,
      });
    });
  });

  describe('reverse', () => {
    test('reverse list of strings', () => {
      const list = DoublyLinkedList<string>();
      list.prepend('a');
      list.prepend('b');
      list.prepend('c');
      let arr: string[] = [];
      const cb = (ele: string) => arr.push(ele);
      list.forEach('head', cb);
      expect(arr).toEqual(['c', 'b', 'a']);
      arr = [];
      const reversed = list.reverse();
      reversed.forEach('head', cb);
      expect(arr).toEqual(['a', 'b', 'c']);
    });
  });
});
