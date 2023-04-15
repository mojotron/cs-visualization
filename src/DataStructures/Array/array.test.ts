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

  test('add item at the beginning of array', () => {
    const arr = new ArrayDS<string>();
    arr.push('a');
    arr.push('b');
    arr.unshift('c');
    arr.unshift('d');

    expect(arr).toEqual({
      _length: 4,
      _data: { 0: 'd', 1: 'c', 2: 'a', 3: 'b' },
    });
  });

  test('remove item from the beginning of array', () => {
    const arr = new ArrayDS<string>();
    arr.push('a');
    arr.push('b');
    arr.unshift('c');
    arr.unshift('d');
    const firstItem = arr.shift();
    arr.shift();
    expect(firstItem).toBe('d');
    expect(arr).toEqual({
      _length: 2,
      _data: { 0: 'a', 1: 'b' },
    });
  });

  describe('insert item on given index into array', () => {
    test('invalid index', () => {
      const arr = new ArrayDS<string>();
      arr.insert(-1, 'a');
      arr.insert(1, 'b');
      expect(arr).toEqual({ _length: 0, _data: {} });
    });

    test('insert at the start', () => {
      const arr = new ArrayDS<string>();
      arr.insert(1, 'No!');
      arr.insert(0, 'a');
      expect(arr).toEqual({ _length: 1, _data: { 0: 'a' } });
    });

    test('insert at the end', () => {
      const arr = new ArrayDS<string>();
      arr.push('mid');
      arr.insert(1, 'end');
      arr.insert(0, 'start');
      expect(arr).toEqual({
        _length: 3,
        _data: { 0: 'start', 1: 'mid', 2: 'end' },
      });
    });

    test('insert in to the middle', () => {
      const arr = new ArrayDS<string>();
      arr.push('start');
      arr.push('end');
      arr.insert(1, 'mid');
      expect(arr).toEqual({
        _length: 3,
        _data: { 0: 'start', 1: 'mid', 2: 'end' },
      });
    });
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

    test('map over array and filter out values in new array', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('B');
      arr.push('c');
      const upperCase = arr.filter(
        (str: string): boolean => str === str.toUpperCase()
      );
      const lowerCase = arr.filter(
        (str: string): boolean => str === str.toLowerCase()
      );
      expect(upperCase).toEqual({
        _length: 1,
        _data: { 0: 'B' },
      });
      expect(lowerCase).toEqual({
        _length: 2,
        _data: { 0: 'a', 1: 'c' },
      });
      // original arr should not be modified
      expect(arr).toEqual({
        _length: 3,
        _data: { 0: 'a', 1: 'B', 2: 'c' },
      });
    });

    test('map over array and return transformed value', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      const transformedArr = arr.map(
        (str: string, i: number) => `${i + 1}.${str}`
      );
      expect(transformedArr).toEqual({
        _length: 3,
        _data: { 0: '1.a', 1: '2.b', 2: '3.c' },
      });
      // original arr should not be modified
      expect(arr).toEqual({
        _length: 3,
        _data: { 0: 'a', 1: 'b', 2: 'c' },
      });
    });

    test('reduce array to single value', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      const reducedValue = arr.reduce(
        (acc: string, ele: string) => `${acc + ele}`,
        '=>'
      );
      expect(reducedValue).toBe('=>abc');
    });

    test('reduce array to single value with numbers', () => {
      const arr = new ArrayDS<number>();
      arr.push(1);
      arr.push(5);
      arr.push(3);
      const reducedValue = arr.reduce(
        (acc: number, ele: number) => acc + ele,
        10
      );
      expect(reducedValue).toBe(19);
    });

    test('return boolean if array contains item', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(arr.any((str: string): boolean => str === 'a')).toBeTruthy();
      expect(arr.any((str: string): boolean => str === 'd')).toBeFalsy();
    });

    test('return boolean if all items pass conditional callback', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(
        arr.every((str: string): boolean => typeof str === 'string')
      ).toBeTruthy();
      expect(arr.every((srt: string): boolean => srt > 'b')).toBeFalsy();
    });

    test('return first item that pass conditional callback', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(arr.find((str: string): boolean => str === 'c')).toBe('c');
      expect(arr.find((str: string): boolean => str === 'x')).toBe(undefined);
    });

    test('return first index of item that pass conditional callback', () => {
      const arr = new ArrayDS<string>();
      arr.push('a');
      arr.push('b');
      arr.push('c');
      expect(arr.indexOf((str: string): boolean => str === 'c')).toBe(2);
      expect(arr.indexOf((str: string): boolean => str === 'x')).toBe(
        undefined
      );
    });
  });

  test('revers array', () => {
    const arr = new ArrayDS<string>();
    arr.push('a');
    arr.push('b');
    arr.push('c');
    const reversed = arr.reverse();
    expect(arr).toEqual({
      _length: 3,
      _data: { 0: 'a', 1: 'b', 2: 'c' },
    });
    expect(reversed).toEqual({
      _length: 3,
      _data: { 0: 'c', 1: 'b', 2: 'a' },
    });
  });

  test('join array into string', () => {
    const arr = new ArrayDS<number>();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    const joined = arr.join(' + ');
    expect(joined).toBe('1 + 2 + 3');

    const arr2 = new ArrayDS<{ name: string }>();
    arr2.push({ name: 'Foo' });
    arr2.push({ name: 'Bar' });
    arr2.push({ name: 'Baz' });
    const joined2 = arr2.join(' + ');
    expect(joined2).toBe('[object Object] + [object Object] + [object Object]');
  });
});
