import { describe, test, expect } from 'vitest';
import CircularSinglyLinkedList from './circularSinglyLinkedList';

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
});
