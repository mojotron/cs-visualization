import { describe, test, expect } from 'vitest';
import HashTable from './hashTable';

describe('Implement own Hash Table Data Structure', () => {
  test('', () => {
    const hash = HashTable(5);
    hash.set('pizza', 5);
    hash.set('apple', 3);
    hash.set('coffee', 7);

    expect(hash.get('pizza')).toEqual(['pizza', 5]);
    // console.log(hash.hash(1, 2));
  });
});
