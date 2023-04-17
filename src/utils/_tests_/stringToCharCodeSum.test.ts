import { describe, test, expect } from 'vitest';
import stringToCharCodeSum from '../stringToCharCodeSum';

describe('return sum of utf-16 code units for given string', () => {
  test('empty string', () => {
    expect(stringToCharCodeSum('')).toBe(0);
  });

  test('strings with different size', () => {
    expect(stringToCharCodeSum('a')).toBe(97);
    expect(stringToCharCodeSum('abc')).toBe(294);
    expect(stringToCharCodeSum('Hello World!')).toBe(1085);
    expect(stringToCharCodeSum('I like JavaScript')).toBe(1573);
  });
});
