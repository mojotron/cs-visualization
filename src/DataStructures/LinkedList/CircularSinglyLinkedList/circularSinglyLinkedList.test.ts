import { describe, test, expect } from 'vitest';
import CircularSinglyLinkedList from './circularSinglyLinkedList';
import { LinkedList } from '../types';

describe('Circular Singly Linked List', () => {
  test('add new node at the end', () => {
    const list = CircularSinglyLinkedList<string>();
    expect(list.print()).toBe('empty');
    list.append('A');
    expect(list.print()).toBe('A -> HEAD(A)');
    list.append('B');
    list.append('C');
    list.append('D');
    expect(list.print()).toBe('A -> B -> C -> D -> HEAD(A)');
  });

  test('add new node at the beginning', () => {
    const list = CircularSinglyLinkedList<string>();
    list.prepend('A');
    expect(list.print()).toBe('A -> HEAD(A)');
    list.prepend('B');
    list.prepend('C');
    list.prepend('D');
    expect(list.print()).toBe('D -> C -> B -> A -> HEAD(D)');
  });

  test('add new node in the middle', () => {
    const list = CircularSinglyLinkedList<string>();
    list.insert(0, 'A');
    expect(list.print()).toBe('A -> HEAD(A)');
    list.insert(1, 'B');
    expect(list.print()).toBe('A -> B -> HEAD(A)');
    // should not insert if index less then 0 or greater then length
    list.insert(-1, 'C');
    expect(list.print()).toBe('A -> B -> HEAD(A)');
    list.insert(3, 'C');
    expect(list.print()).toBe('A -> B -> HEAD(A)');
    //
    list.insert(1, 'C');
    expect(list.print()).toBe('A -> C -> B -> HEAD(A)');
    list.insert(1, 'D');
    expect(list.print()).toBe('A -> D -> C -> B -> HEAD(A)');
    list.insert(2, 'E');
    expect(list.print()).toBe('A -> D -> E -> C -> B -> HEAD(A)');
  });

  test('remove node from the beginning', () => {
    const list = CircularSinglyLinkedList<string>();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('D');
    const a = list.shift();
    expect(a).toBe('A');
    expect(list.print()).toBe('B -> C -> D -> HEAD(B)');
    const b = list.shift();
    expect(b).toBe('B');
    expect(list.print()).toBe('C -> D -> HEAD(C)');
    const c = list.shift();
    expect(c).toBe('C');
    expect(list.print()).toBe('D -> HEAD(D)');
    const d = list.shift();
    expect(d).toBe('D');
    expect(list.print()).toBe('empty');
  });

  test('remove node from the end', () => {
    const list = CircularSinglyLinkedList<string>();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('D');
    const d = list.pop();
    expect(d).toBe('D');
    expect(list.print()).toBe('A -> B -> C -> HEAD(A)');
    const c = list.pop();
    expect(c).toBe('C');
    expect(list.print()).toBe('A -> B -> HEAD(A)');
    const b = list.pop();
    expect(b).toBe('B');
    expect(list.print()).toBe('A -> HEAD(A)');
    const a = list.pop();
    expect(a).toBe('A');
    expect(list.print()).toBe('empty');
  });

  test('remove node from the middle', () => {
    const list = CircularSinglyLinkedList<string>();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('D');
    list.append('E');
    list.append('F');
    const c = list.deleteAt(2);
    expect(c).toBe('C');
    expect(list.print()).toBe('A -> B -> D -> E -> F -> HEAD(A)');
    // invalid index return s undefined
    const x = list.deleteAt(-1);
    const y = list.deleteAt(5); // last element is length - 1 (4)
    expect(x).toBe(undefined);
    expect(y).toBe(undefined);
    expect(list.print()).toBe('A -> B -> D -> E -> F -> HEAD(A)');
    const a = list.deleteAt(0);
    expect(a).toBe('A');
    expect(list.print()).toBe('B -> D -> E -> F -> HEAD(B)');
    const e = list.deleteAt(2);
    expect(e).toBe('E');
    expect(list.print()).toBe('B -> D -> F -> HEAD(B)');
    const d = list.deleteAt(1);
    expect(d).toBe('D');
    expect(list.print()).toBe('B -> F -> HEAD(B)');
    const f = list.deleteAt(1);
    expect(f).toBe('F');
    expect(list.print()).toBe('B -> HEAD(B)');
    const b = list.deleteAt(0);
    expect(b).toBe('B');
    expect(list.print()).toBe('empty');
  });

  test('search primitive value', () => {
    const list = CircularSinglyLinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    const three = list.search((ele) => ele === 3);
    expect(three).toBe(3);
    const five = list.search((ele) => ele === 5);
    expect(five).toBe(undefined);
  });

  test('search value in the object', () => {
    const list = CircularSinglyLinkedList<{
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

  test('reverse', () => {
    const list = CircularSinglyLinkedList<string>();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('D');
    list.append('E');
    list.append('F');

    const reversed = list.reverse() as LinkedList<string>;
    expect(reversed.print()).toBe('F -> E -> D -> C -> B -> A -> HEAD(F)');
  });

  test('reverse in place', () => {
    const list = CircularSinglyLinkedList<string>();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('D');
    list.reverseInPlace();
    expect(list.print()).toBe('D -> C -> B -> A -> HEAD(D)');
  });
});
