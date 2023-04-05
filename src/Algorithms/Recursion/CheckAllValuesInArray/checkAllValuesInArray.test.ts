import { describe, test, expect } from 'vitest';
import checkAllValuesInArray from './checkAllValuesInArray';

type InputType = string | number | boolean;

describe('Check if all values in array meet callback condition', () => {
  test('empty array return true', () => {
    expect(checkAllValuesInArray([], () => false)).toBeTruthy();
  });

  test('array elements are true', () => {
    const arrTrue = [true, true, true, true, true];
    const arrFalse = [true, true, true, true, false];
    const cb = (input: InputType) => !!input;
    expect(checkAllValuesInArray(arrTrue, cb)).toBeTruthy();
    expect(checkAllValuesInArray(arrFalse, cb)).toBeFalsy();
  });

  test('array elements are strings', () => {
    const arrTrue = ['a', 'b', 'c'];
    const arrFalse = ['a', 'b', 3];
    const cb = (input: InputType) => typeof input === 'string';
    expect(checkAllValuesInArray(arrTrue, cb)).toBeTruthy();
    expect(checkAllValuesInArray(arrFalse, cb)).toBeFalsy();
  });

  test('array elements are number greater then 3', () => {
    const arrTrue = [5, 6, 7, 8];
    const arrFalse = [5, 3, 7, 8];
    const cb = (input: InputType) => {
      if (typeof input !== 'number') return false;
      return input > 3;
    };
    expect(checkAllValuesInArray(arrTrue, cb)).toBeTruthy();
    expect(checkAllValuesInArray(arrFalse, cb)).toBeFalsy();
  });

  test('array elements are strings of length greater then 2', () => {
    const arrTrue = ['aaa', 'bbb', 'ccc'];
    const arrFalse = ['a', 'bbb', 'ccc'];
    const cb = (input: InputType) => {
      if (typeof input !== 'string') return false;
      return input.length >= 3;
    };
    expect(checkAllValuesInArray(arrTrue, cb)).toBeTruthy();
    expect(checkAllValuesInArray(arrFalse, cb)).toBeFalsy();
  });
});
