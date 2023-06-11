import { describe, test, expect } from 'vitest';
import RedBlackTree from './redBlackTree';

describe('Red Black Tree', () => {
  describe('insertion', () => {
    test('happy path', () => {
      const tree = {
        id: 2,
        value: '',
        left: {
          id: 1,
          value: '',
          left: null,
          right: null,
          parent: 2,
          color: 'red',
        },
        right: {
          id: 3,
          value: '',
          left: null,
          right: {
            id: 4,
            value: '',
            left: null,
            right: null,
            parent: 3,
            color: 'red',
          },
          parent: 2,
          color: 'red',
        },
        parent: null,
        color: 'black',
      };
      const rbt = RedBlackTree<string>();
      rbt.rotateLeft(tree);
      console.log(tree);
    });
  });
  // rbt.insert(2, 'x');
  // rbt.insert(1, 'y');
  // rbt.insert(3, 'a');
  // rbt.insert(5, 'c');
  // rbt.insert(4, 'b');
});
