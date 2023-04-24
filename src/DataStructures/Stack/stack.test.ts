import { describe, test, expect } from 'vitest';
import Stack from './stack';

describe('Stack DS implementation', () => {
  test('initialize stack', () => {
    const stack = Stack<string>();
    expect(stack.size()).toBe(0);
    expect(stack.top()).toBe(undefined);
    expect(stack.isEmpty()).toBe(true);
  });

  test('stack push operations', () => {
    const stack = Stack<string>();
    stack.push('a');
    expect(stack.size()).toBe(1);
    expect(stack.top()).toBe('a');
    expect(stack.isEmpty()).toBe(false);
    stack.push('b');
    expect(stack.size()).toBe(2);
    expect(stack.top()).toBe('b');
    expect(stack.isEmpty()).toBe(false);
    stack.push('c');
    expect(stack.size()).toBe(3);
    expect(stack.top()).toBe('c');
    expect(stack.isEmpty()).toBe(false);
  });

  test('stack pop operations', () => {
    const stack = Stack<string>();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    const c = stack.pop();
    expect(c).toBe('c');
    expect(stack.size()).toBe(2);
    expect(stack.top()).toBe('b');
    expect(stack.isEmpty()).toBe(false);
    const b = stack.pop();
    expect(b).toBe('b');
    expect(stack.size()).toBe(1);
    expect(stack.top()).toBe('a');
    expect(stack.isEmpty()).toBe(false);
    const a = stack.pop();
    expect(a).toBe('a');
    expect(stack.size()).toBe(0);
    expect(stack.top()).toBe(undefined);
    expect(stack.isEmpty()).toBe(true);
    const x = stack.pop();
    expect(x).toBe(undefined);
  });
});
