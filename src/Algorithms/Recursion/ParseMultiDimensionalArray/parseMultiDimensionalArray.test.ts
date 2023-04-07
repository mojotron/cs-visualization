import { describe, test, expect } from 'vitest';
import parseMultiDimensionalArray from './parseMultiDimensionalArray';

const parse = parseMultiDimensionalArray;

describe('find total number of primitive values in multi dimensional array', () => {
  test('empty array should return 0', () => {
    expect(parse([], 'number')).toBe(0);
    expect(parse([], 'string')).toBe(0);
    expect(parse([], 'boolean')).toBe(0);
  });

  test('one dimensional array', () => {
    const arr = [1, true, 'a', null, 2, false, 'b'];
    expect(parse(arr, 'number')).toBe(2);
    expect(parse(arr, 'string')).toBe(2);
    expect(parse(arr, 'boolean')).toBe(2);
    expect(parse(arr, 'undefined')).toBe(0);
  });

  test('two dimensional array', () => {
    const arr = [[1, true], 'a', [null, 2, false], 'b'];
    expect(parse(arr, 'number')).toBe(2);
    expect(parse(arr, 'string')).toBe(2);
    expect(parse(arr, 'boolean')).toBe(2);
    expect(parse(arr, 'undefined')).toBe(0);
  });

  test('deep nested array', () => {
    const arr = [
      1,
      [[true, null], 'a'],
      [[[2, ['b', true], false, [[[3]]]]]],
      false,
      [[[[4], null], 5, 'c', ['d'], [], [true, [6, 7]]]],
    ];
    expect(parse(arr, 'number')).toBe(7);
    expect(parse(arr, 'string')).toBe(4);
    expect(parse(arr, 'boolean')).toBe(5);
    expect(parse(arr, 'undefined')).toBe(0);
  });
});
