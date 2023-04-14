/* eslint-disable no-underscore-dangle */

type IteratorType<T> = {
  (): (ele: T, index?: number, obj?: object) => void;
};

interface ArrayDSInterface<T> {
  _length: number;
  _data: {
    [key: number]: T;
  };
  get(index: number): void;
  push(item: T): void;
  pop(): T | undefined;
  // unshift(item: T): void;
  // shift(): T | undefined;
  delete(index: number): T | undefined;
  // reverse
  forEach(callback: (ele: T, index?: number, obj?: object) => void): void;
  // filter
  // map
  // reduce
  // any
  // every
  // find
  // indexOf
  // sort
  // join
}

class ArrayDS<T> implements ArrayDSInterface<T> {
  _length = 0;

  _data: {
    [key: number]: T;
  } = {};

  // getters and setters
  get length() {
    return this._length;
  }

  // private methods

  private deleteLastItem() {
    delete this._data[this._length - 1];
    this._length -= 1;
  }

  private shiftItems(index: number) {
    // shift all items from a given index
    for (let i = index; i < this.length - 1; i += 1) {
      this._data[i] = this._data[i + 1];
    }
    this.deleteLastItem();
  }

  // public methods
  get(index: number) {
    return this._data[index];
  }

  push(item: T) {
    this._data[this._length] = item;
    this._length += 1;
    return this.length;
  }

  pop() {
    if (this._length === 0) return;
    const lastItem = this._data[this._length - 1];
    this.deleteLastItem();
    return lastItem;
  }

  delete(index: number) {
    if (!this._data[index]) return;
    const deletedItem = this._data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  forEach(callBack: (ele: T, index?: number, obj?: object) => void): void {
    for (let i = 0; i < this._length; i += 1) {
      callBack(this._data[i], i, this);
    }
  }

  filter(callBack: (ele: T, index?: number, obj?: object):boolean => void): T[] {
    const filtered: T[] = [];
    for(let i = 0; i < this._length; i += 1) {

    }
    return filtered;
  }
}

export default ArrayDS;
