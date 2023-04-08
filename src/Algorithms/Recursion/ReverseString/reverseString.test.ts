import { describe, test, expect } from 'vitest';
import reverseString from './reverseString';

describe('reverse string using recursion', () => {
  test('empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('correct input', () => {
    expect(reverseString('abc')).toBe('cba');
    expect(reverseString('Abc')).toBe('cbA');
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
  });
});
