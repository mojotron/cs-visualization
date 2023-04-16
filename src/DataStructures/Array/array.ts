/* eslint-disable no-underscore-dangle, class-methods-use-this */

interface ArrayDSInterface<T> {
  _length: number;
  _data: {
    [key: number]: T;
  };
  get(index: number): void;
  push(item: T): number;
  pop(): T | undefined;
  unshift(item: T): number;
  shift(): T | undefined;
  delete(index: number): T | undefined;
  insert(index: number, item: T): number | undefined;
  forEach(callback: (ele: T, index: number, obj: object) => void): void;
  filter(
    callback: (ele: T, index: number, obj: object) => boolean
  ): ArrayDSInterface<T>;
  map(callback: (ele: T, index: number, obj: object) => T): ArrayDSInterface<T>;
  reduce(
    callback: (accumulator: T, ele: T, index: number, obj: object) => T,
    initialValue: T
  ): T;
  any(callback: (ele: T, index: number, obj: object) => boolean): boolean;
  every(callback: (ele: T, index: number, obj: object) => boolean): boolean;
  find(
    callback: (ele: T, index: number, obj: object) => boolean
  ): T | undefined;
  indexOf(callback: (ele: T) => boolean): number | undefined;
  reverse(): ArrayDSInterface<T>;
  join(separator: string): string;
  slice(start: number, end?: number): ArrayDSInterface<T>;
  sort(
    callback: (a: T, b: T) => number,
    arr?: ArrayDSInterface<T>
  ): ArrayDSInterface<T>;
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

  private unshiftItems(index: number, item: T) {
    for (let i = this._length; i >= index; i -= 1) {
      this._data[i] = i === index ? item : this._data[i - 1];
    }
    this._length += 1;
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

  unshift(item: T) {
    this.unshiftItems(0, item);
    return this.length;
  }

  shift(): T | undefined {
    if (this._length === 0) return;
    const firstItem = this._data[0];
    this.shiftItems(0);
    return firstItem;
  }

  delete(index: number): T | undefined {
    if (!this._data[index]) return;
    const deletedItem = this._data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  insert(index: number, item: T): number | undefined {
    if (index < 0 || index > this._length) return;
    this.unshiftItems(index, item);
    return this._length;
  }

  forEach(callback: (ele: T, index: number, obj: object) => void): void {
    for (let i = 0; i < this._length; i += 1) {
      callback(this._data[i], i, this);
    }
  }

  filter(
    callback: (ele: T, index: number, obj: object) => boolean
  ): ArrayDS<T> {
    const filtered = new ArrayDS<T>();
    for (let i = 0; i < this._length; i += 1) {
      if (callback(this._data[i], i, this)) filtered.push(this._data[i]);
    }
    return filtered;
  }

  map(callback: (ele: T, index: number, obj: object) => T): ArrayDS<T> {
    const transformed = new ArrayDS<T>();
    for (let i = 0; i < this._length; i += 1) {
      transformed.push(callback(this._data[i], i, this));
    }
    return transformed;
  }

  reduce(
    callback: (accumulator: T, ele: T, index: number, obj: object) => T,
    initialValue: T
  ): T {
    let result: T = initialValue;
    for (let i = 0; i < this._length; i += 1) {
      result = callback(result, this._data[i], i, this);
    }

    return result;
  }

  any(callback: (ele: T, index: number, obj: object) => boolean): boolean {
    for (let i = 0; i < this._length; i += 1) {
      if (callback(this._data[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  every(callback: (ele: T, index: number, obj: object) => boolean): boolean {
    for (let i = 0; i < this._length; i += 1) {
      if (!callback(this._data[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  find(
    callback: (ele: T, index: number, obj: object) => boolean
  ): T | undefined {
    for (let i = 0; i < this._length; i += 1) {
      if (callback(this._data[i], i, this)) return this._data[i];
    }
    return undefined;
  }

  indexOf(callback: (ele: T) => boolean): number | undefined {
    for (let i = 0; i < this._length; i += 1) {
      if (callback(this._data[i])) return i;
    }
    return undefined;
  }

  reverse(): ArrayDS<T> {
    const reversed = new ArrayDS<T>();
    for (let i = this.length - 1; i >= 0; i -= 1) {
      reversed.push(this._data[i]);
    }
    return reversed;
  }

  join(separator: string): string {
    let joined = '';
    for (let i = 0; i < this._length; i += 1) {
      joined +=
        typeof this._data[i] === 'object'
          ? '[object Object]'
          : `${this._data[i]}`;
      if (i < this._length - 1) joined += separator;
    }
    return joined;
  }

  slice(start = 0, end?: number): ArrayDS<T> {
    let startPointer = start;
    if (startPointer < 0) startPointer += this._length;
    if (startPointer < -this._length) startPointer = 0;

    let endPointer = end || this._length;
    if (endPointer < 0) endPointer += this._length;
    if (endPointer < -this._length) endPointer = 0;
    if (endPointer >= this._length) endPointer = this._length;

    const sliced = new ArrayDS<T>();

    for (let i = startPointer; i < endPointer; i += 1) {
      sliced.push(this._data[i]);
    }

    return sliced;
  }

  private merge(
    callback: (a: T, b: T) => number,
    arr1: ArrayDS<T>,
    arr2: ArrayDS<T>
  ) {
    const merged = new ArrayDS<T>();
    let arr1Pointer = 0;
    let arr2Pointer = 0;
    let comparison: number;

    while (arr1Pointer < arr1._length && arr2Pointer < arr2._length) {
      comparison = callback(arr1._data[arr1Pointer], arr2._data[arr2Pointer]);
      if (comparison === 1) {
        merged.push(arr2._data[arr2Pointer]);
        arr2Pointer += 1;
      } else {
        merged.push(arr1._data[arr1Pointer]);
        arr1Pointer += 1;
      }
    }

    if (arr1Pointer < arr1._length) {
      while (arr1Pointer < arr1._length) {
        merged.push(arr1._data[arr1Pointer]);
        arr1Pointer += 1;
      }
    }
    if (arr2Pointer < arr2._length) {
      while (arr2Pointer < arr2._length) {
        merged.push(arr2._data[arr2Pointer]);
        arr2Pointer += 1;
      }
    }
    return merged;
  }

  sort(callback: (a: T, b: T) => number, arr: ArrayDS<T> = this): ArrayDS<T> {
    if (arr._length === 1) return arr;
    const half = Math.floor(arr._length / 2);
    const left = arr.slice(0, half);
    const right = arr.slice(half);
    return this.merge(
      callback,
      this.sort(callback, left),
      this.sort(callback, right)
    );
  }
}

export default ArrayDS;
