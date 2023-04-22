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
    test('delete from the beginning', () => {
      const list = SinglyLinkedList<string>();
      list.append('a');
      list.append('b');
      list.append('c');
      const a = list.shift();
      expect(a).toBe('a');
      expect(list.head).toBe('b');
      expect(list.length).toBe(2);
      const b = list.shift();
      expect(b).toBe('b');
      expect(list.head).toBe('c');
      expect(list.length).toBe(1);
      const c = list.shift();
      expect(c).toBe('c');
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);
      const d = list.shift();
      expect(d).toBe(undefined);
    });

    test('delete from the end', () => {
      const list = SinglyLinkedList<string>();
      list.append('a');
      list.append('b');
      list.append('c');
      const c = list.pop();
      expect(c).toBe('c');
      expect(list.tail).toBe('b');
      expect(list.length).toBe(2);
      const b = list.pop();
      expect(b).toBe('b');
      expect(list.tail).toBe('a');
      expect(list.length).toBe(1);
      const a = list.pop();
      expect(a).toBe('a');
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
      expect(list.length).toBe(0);
      const d = list.pop();
      expect(d).toBe(undefined);
    });
    test('delete from the middle', () => {
      const list = SinglyLinkedList<string>();
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
    });
  });

  describe('search', () => {
    test('search in objects', () => {
      const list = SinglyLinkedList<{
        userName: string;
        age: number;
        premium: boolean;
      }>();
      list.append({ userName: 'Bob', age: 35, premium: true });
      list.append({ userName: 'Sara', age: 20, premium: true });
      list.append({ userName: 'Mike', age: 24, premium: false });
      const hasSara = list.search((ele) => ele.userName === 'Sara');
      expect(hasSara).toEqual({ userName: 'Sara', age: 20, premium: true });
      const age24 = list.search((ele) => ele.age === 24);
      expect(age24).toEqual({ userName: 'Mike', age: 24, premium: false });
      const firstPremium = list.search((ele) => ele.premium === true);
      expect(firstPremium).toEqual({ userName: 'Bob', age: 35, premium: true });
    });
  });

  describe('reverse', () => {
    test('reverse list of strings', () => {
      const list = SinglyLinkedList<string>();
      list.prepend('a');
      list.prepend('b');
      list.prepend('c');
      let arr: string[] = [];
      const cb = (ele: string) => arr.push(ele);
      list.forEach(cb);
      expect(arr).toEqual(['c', 'b', 'a']);
      arr = [];
      const reversed = list.reverse();
      reversed.forEach(cb);
      expect(arr).toEqual(['a', 'b', 'c']);
    });
  });
  // describe('sort', () => {});
});
