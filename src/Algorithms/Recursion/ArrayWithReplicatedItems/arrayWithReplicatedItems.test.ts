/* eslint-disable @typescript-eslint/no-unused-vars */

import { describe, test, expect } from 'vitest';
import arrayWithReplicatedItems from './arrayWithReplicatedItems';

describe('Create array of n length filled with same item', () => {
  test('negative length returns empty array', () => {
    expect(arrayWithReplicatedItems(-1, 1)).toEqual([]);
  });

  test('0 length returns empty array', () => {
    expect(arrayWithReplicatedItems(0, 1)).toEqual([]);
  });

  test('positive length return array with length', () => {
    expect(arrayWithReplicatedItems(3, 1)).toEqual(
      Array.from({ length: 3 }, (_) => 1)
    );
    expect(arrayWithReplicatedItems(5, 'a')).toEqual(
      Array.from({ length: 5 }, (_) => 'a')
    );
    expect(arrayWithReplicatedItems(7, true)).toEqual(
      Array.from({ length: 7 }, (_) => true)
    );
    expect(arrayWithReplicatedItems(9, null)).toEqual(
      Array.from({ length: 9 }, (_) => null)
    );
  });
});
