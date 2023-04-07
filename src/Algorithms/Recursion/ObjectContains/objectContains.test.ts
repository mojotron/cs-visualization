import { describe, test, expect } from 'vitest';
import objectContains from './objectContains';

describe('Search JS object and find if contains value', () => {
  test('empty object', () => {
    expect(objectContains({}, 'foo')).toBeFalsy();
  });

  test('non nested object with value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectContains(obj, 2)).toBeTruthy();
  });

  test('non nested object without value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectContains(obj, 4)).toBeFalsy();
  });

  test('nested object with value', () => {
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

  test('nested object without value', () => {
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
        y: 2,
        z: 3,
      },
    };
    expect(objectContains(obj, 4)).toBeFalsy();
  });

  test('deeply nested object', () => {
    const obj = {
      a: {
        x: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
        y: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
        z: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
      },
      b: {
        x: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
        y: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
        z: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
      },
      c: {
        x: { d: { a: 1, b: { pass: true } }, e: { a: 1, b: 2 } },
        y: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
        z: { d: { a: 1, b: 2 }, e: { a: 1, b: 2 } },
      },
    };

    expect(objectContains(obj, true)).toBeTruthy();
    expect(objectContains(obj, false)).toBeFalsy();

    const nestedObject = {
      data: {
        info: {
          stuff: {
            thing: {
              moreStuff: {
                magicNumber: 44,
                something: 'foo',
              },
            },
          },
        },
      },
    };

    expect(objectContains(nestedObject, 44)).toBeTruthy(); // true
    expect(objectContains(nestedObject, 'bar')).toBeFalsy(); // false
  });
});
