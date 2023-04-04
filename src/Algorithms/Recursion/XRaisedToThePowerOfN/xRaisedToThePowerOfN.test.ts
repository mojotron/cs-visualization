import { describe, test, expect, vi } from 'vitest';
import xRaisedToPowerOfN from './xRaisedToThePowerOfN';

describe('Recursive x raised to power of n', () => {
  describe('invalid inputs', () => {
    test('n is negative number', () => {
      expect(() => {
        xRaisedToPowerOfN(2, -3);
      }).toThrowError('n must be a positive number');
    });
    test('n is float number', () => {
      expect(() => {
        xRaisedToPowerOfN(2, 3.1);
      }).toThrowError('n must be integer not float');
    });
  });

  test('positive numbers', () => {
    expect(xRaisedToPowerOfN(2, 0)).toBe(1);
    expect(xRaisedToPowerOfN(2, 1)).toBe(2);
    expect(xRaisedToPowerOfN(2, 3)).toBe(8);
    expect(xRaisedToPowerOfN(6, 5)).toBe(7776);
    expect(xRaisedToPowerOfN(8, 12)).toBe(68719476736);
  });

  test('negative numbers', () => {
    expect(xRaisedToPowerOfN(-2, 0)).toBe(1);
    expect(xRaisedToPowerOfN(-2, 1)).toBe(-2);
    expect(xRaisedToPowerOfN(-2, 3)).toBe(-8);
    expect(xRaisedToPowerOfN(-2, 4)).toBe(16);
    expect(xRaisedToPowerOfN(-6, 5)).toBe(-7776);
    expect(xRaisedToPowerOfN(-8, 12)).toBe(68719476736);
  });
});
