/* eslint-disable no-return-assign */
import { describe, test, expect } from 'vitest';
import ArrayDS from './array';

describe('Custom Array Data Structure', () => {
  test('instantiate new array', () => {
    const arr = new ArrayDS();
    expect(arr).toEqual({ _length: 0, _data: {} });
  });

  test('push item to the end of the array', () => {
    const arr = new ArrayDS<string>();
    expect(arr.length).toBe(0);
    arr.push('a');
    expect(arr.length).toBe(1);
    // push method returns new array length
    const size = arr.push('b');
    expect(arr.length).toBe(2);
    expect(size).toBe(2);
  });

  test('get at position in array', () => {
    const arr = new ArrayDS<string>();
    arr.push('a');
    arr.push('b');
    arr.push('c');
    expect(arr.get(0)).toBe('a');
    expect(arr.get(1)).toBe('b');
    expect(arr.get(2)).toBe('c');
    expect(arr.get(3)).toBe(undefined);
  });

  test('remove last item from array', () => {
    const arr = new ArrayDS<string>();
    arr.push('a');
    arr.push('b');
    arr.push('c');
    expect(arr.length).toBe(3);
    arr.pop();
    expect(arr.length).toBe(2);
    // pop returns removed item
    const lastItem = arr.pop();
    expect(arr.length).toBe(1);
    expect(lastItem).toBe('b');
  });

  describe('delete item on given index from array', () => {
    test('delete from the start', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(arr.length).toBe(3);
      const deletedItem = arr.delete(0);
      expect(arr.length).toBe(2);
      expect(deletedItem).toBe('a');
      expect(arr).toEqual({ _length: 2, _data: { 0: 'b', 1: 'c' } });
    });

    test('delete from the end', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(arr.length).toBe(3);
      const deletedItem = arr.delete(arr.length - 1);
      expect(arr.length).toBe(2);
      expect(deletedItem).toBe('c');
      expect(arr).toEqual({ _length: 2, _data: { 0: 'a', 1: 'b' } });
    });

    test('delete from the middle', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(arr.length).toBe(3);
      const deletedItem = arr.delete(1);
      expect(arr.length).toBe(2);
      expect(deletedItem).toBe('b');
      expect(arr).toEqual({ _length: 2, _data: { 0: 'a', 1: 'c' } });
    });
  });

  describe('iterators', () => {
    test('forEach', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      let result = '';
      arr.forEach((str: string) => (result += str));
      expect(result).toBe('abc');
    });

    test('map over array and return transformed value', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      const transformedArr = arr.map((str: string) => `-${str}-`);
      expect(transformedArr).toEqual({
        _length: 3,
        _data: { 0: '-a-', 1: '-b-', 2: '-c-' },
      });
    });

    test('reduce array to single value', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      const reducedValue = arr.reduce(
        (acc: string, ele: string) => acc + ele,
        ''
      );
      expect(reducedValue).toBe('abc');
    });
  });
});
