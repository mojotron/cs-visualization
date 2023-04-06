import { describe, test, expect } from 'vitest';
import sumOfSquaresInMultidimensionalArray from './sumOfSquaresInMultidimensionalArray';

const sum = sumOfSquaresInMultidimensionalArray;

describe('Sum of squares in multi dimensional arr', () => {
  test('empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('one dimensional array', () => {
    expect(sum([2, 3, 4])).toBe(18);
  });

  test('two dimensional array', () => {
    expect(sum([2, [3, 4]])).toBe(18);
    expect(
      sum([
        [2, 2],
        [2, 2],
      ])
    ).toBe(16);
    expect(sum([2, [2], 2])).toBe(12);
  });

  test('deeply nested arrays', () => {
    expect(sum([[[[[[[[[2]]]]]]]]])).toBe(4);
    expect(sum([2, [[2], 2], [2]])).toBe(16);
  });
});
