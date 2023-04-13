/* eslint-disable no-underscore-dangle */

interface ArrayDSInterface<T> {
  _length: number;
  _data: {
    [key: number]: T;
  };
  get(index: number): void;
  push(item: T): void;
  // pop(): void;
}

class ArrayDS<T> implements ArrayDSInterface<T> {
  _length = 0;

  _data: {
    [key: number]: T;
  } = {};

  get length() {
    return this._length;
  }

  get(index: number) {
    return this._data[index];
  }

  push(item: T) {
    this._data[this._length] = item;
    this._length += 1;
  }
}

export default ArrayDS;
