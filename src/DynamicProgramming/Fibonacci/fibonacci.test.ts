import { describe, test, expect } from 'vitest';
import { fibonacciWithCalls, fibonacciMemoized } from './fibonacci';

describe('test memoized fibonacci', () => {
  test('number 3', () => {
    const { getCalls: callsNonMemo, fibonacci: fibNonMemo } =
      fibonacciWithCalls();
    const { getCalls, fibonacci } = fibonacciMemoized();

    const nonMemoResult = fibNonMemo(3);
    const memoResult = fibonacci(3);

    expect(callsNonMemo()).toBe(5);
    expect(getCalls()).toBe(5);
    expect(nonMemoResult).toBe(2);
    expect(memoResult).toBe(2);
  });

  test('number 10', () => {
    const { getCalls: callsNonMemo, fibonacci: fibNonMemo } =
      fibonacciWithCalls();
    const { getCalls, fibonacci } = fibonacciMemoized();

    const nonMemoResult = fibNonMemo(10);
    const memoResult = fibonacci(10);

    expect(callsNonMemo()).toBe(177);
    expect(getCalls()).toBe(19);
    expect(nonMemoResult).toBe(55);
    expect(memoResult).toBe(55);
  });

  test('number 10', () => {
    const { getCalls: callsNonMemo, fibonacci: fibNonMemo } =
      fibonacciWithCalls();
    const { getCalls, fibonacci } = fibonacciMemoized();

    const nonMemoResult = fibNonMemo(15);
    const memoResult = fibonacci(15);

    expect(callsNonMemo()).toBe(1973);
    expect(getCalls()).toBe(29);
    expect(nonMemoResult).toBe(610);
    expect(memoResult).toBe(610);
  });

  test('number 35', () => {
    const { getCalls: callsNonMemo, fibonacci: fibNonMemo } =
      fibonacciWithCalls();
    const { getCalls, fibonacci } = fibonacciMemoized();

    const nonMemoResult = fibNonMemo(35);
    const memoResult = fibonacci(35);

    expect(callsNonMemo()).toBe(29860703);
    expect(getCalls()).toBe(69);
    expect(nonMemoResult).toBe(9227465);
    expect(memoResult).toBe(9227465);
  });
});
