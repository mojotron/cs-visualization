import { describe, test, expect } from 'vitest';
import firstRecurringElement from './firstRecurringElement';

describe('Interview questions', () => {
  test('first recurring element', () => {
    expect(firstRecurringElement([2, 5, 1, 2, 3, 5, 1, 2, 4], 5)).toBe(2);
    expect(firstRecurringElement([2, 1, 1, 2, 3, 5, 1, 2, 4], 5)).toBe(1);
    expect(firstRecurringElement([2, 3, 4, 5], 5)).toBe(false);
  });
});
