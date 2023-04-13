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
});
