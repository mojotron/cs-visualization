import { describe, test, expect } from 'vitest';
import HashTable from './hashTable';

describe('Implement own Hash Table Data Structure', () => {
  test('create new Hash Table using factory function', () => {
    const hash = HashTable<string, number>(5);
    hash.set('pizza', 5);
    expect(hash.get('pizza')).toEqual(5);
    expect(hash.get('coffee')).toBe(undefined);
  });

  test('setting new item, collisions', () => {
    const hash = HashTable<string, number>(1);
    // put elements in same bucket
    hash.set('a', 10);
    hash.set('b', 20);
    hash.set('c', 30);
    expect(hash.get('a')).toBe(10);
    expect(hash.get('b')).toBe(20);
    expect(hash.get('c')).toBe(30);
    expect(hash.get('d')).toBe(undefined);
    // using same key should reassign value for that key
    hash.set('b', 100);
    expect(hash.get('a')).toBe(10);
    expect(hash.get('b')).toBe(100);
    expect(hash.get('c')).toBe(30);
  });

  test('return all keys from hash', () => {
    const hash = HashTable<string, number>(3);
    hash.set('a', 10);
    hash.set('b', 20);
    hash.set('c', 30);
    hash.set('d', 40);
    hash.set('e', 50);
    hash.set('f', 60);
    const keys = hash.keys();
    expect(keys.sort()).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  test('return all values from hash', () => {
    const hash = HashTable<string, number>(3);
    hash.set('a', 10);
    hash.set('b', 20);
    hash.set('c', 30);
    hash.set('d', 40);
    hash.set('e', 50);
    hash.set('f', 60);
    const values = hash.values();
    expect(values.sort()).toEqual([10, 20, 30, 40, 50, 60]);
  });

  test('clear all data fro hash', () => {
    const hash = HashTable<string, number>(3);
    hash.set('a', 10);
    hash.set('b', 20);
    hash.set('c', 30);
    hash.set('d', 40);
    hash.set('e', 50);
    hash.set('f', 60);
    hash.clear();
    const keys = hash.keys();
    expect(keys).toEqual([]);
  });

  test('clear all data fro hash', () => {
    const hash = HashTable<string, number>(3);
    hash.set('a', 10);
    hash.set('b', 20);
    hash.set('c', 30);
    hash.set('d', 40);
    hash.set('e', 50);
    hash.set('f', 60);
    hash.remove('a');
    expect(hash.keys().sort()).toEqual(['b', 'c', 'd', 'e', 'f']);
    hash.remove('f');
    hash.remove('c');
    expect(hash.keys().sort()).toEqual(['b', 'd', 'e']);
    const b = hash.remove('b');
    const d = hash.remove('d');
    const e = hash.remove('e');
    expect(hash.keys().sort()).toEqual([]);
    expect(b).toEqual(20);
    expect(d).toEqual(40);
    expect(e).toEqual(50);
  });

  test('return boolean if key exists', () => {
    const hash = HashTable<string, number>(3);
    hash.set('a', 10);
    hash.set('b', 20);
    expect(hash.has('a')).toBeTruthy();
    expect(hash.has('a')).toBeTruthy();
    expect(hash.has('c')).toBeFalsy();
  });

  test('', () => {
    const hash = HashTable<string, number>(3);
    hash.set('a', 10);
    hash.set('b', 20);
    let resultStrings = '';
    let resultNumbers = 0;
    hash.forEach((k, v) => {
      resultStrings += k;
      resultNumbers += v;
    });
    expect(resultStrings).toBe('ab');
    expect(resultNumbers).toBe(30);
  });

  describe('Interview questions', () => {
    test('first recurring element', () => {
      // const example1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
      // const example2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
      // const example3 = [2, 3, 4, 5];
      // let result;
      // const hash = HashTable(5);
    });
  });
});
