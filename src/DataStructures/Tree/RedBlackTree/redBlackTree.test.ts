import { describe, test, expect } from 'vitest';
import RedBlackTree from './redBlackTree';

describe('Red Black Tree', () => {
  describe('insertion', () => {
    test('happy path', () => {
      const rbt = RedBlackTree<string>();
      rbt.insert(2, 'x');
      rbt.insert(1, 'y');
      rbt.insert(3, 'a');
      rbt.insert(4, 'b');
      rbt.insert(5, 'c');
      rbt.print();
    });
  });
});
