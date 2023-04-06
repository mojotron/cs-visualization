import { describe, test, expect } from 'vitest';
import objectContains from './objectContains';

describe('Search JS object and find if contains value', () => {
  test('empty object', () => {
    expect(objectContains({}, 'foo')).toBeFalsy();
  });

  test('non nested object with value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectContains(obj, 2)).toBeFalsy();
  });

  test('non nested object without value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectContains(obj, 4)).toBeFalsy();
  });

  test.only('nested object with value', () => {
    const obj = {
      a: {
        x: 1,
        y: 2,
        z: 3,
      },
      b: {
        x: 1,
        y: 2,
        z: 3,
      },
      c: {
        x: 1,
        y: 4,
        z: 3,
      },
    };
    expect(objectContains(obj, 4)).toBeTruthy();
  });

  test('nested object without value', () => {});

  test('deeply nested object', () => {});
});
