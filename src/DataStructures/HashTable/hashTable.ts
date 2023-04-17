/* eslint-disable no-underscore-dangle */
import stringToCharCodeSum from '../../utils/stringToCharCodeSum';

// type HashTableReturnType = {};
//   data: [K, V][];
//   length: number;
// hash: (key: K) => number;
// set(key: K, value: V): void;
// get(key: K): [K, V] | undefined;
// has
// keys
// values
// delete
// clear
// forEach
// }

const HashTable = <K, V>(hashSize: number) => {
  const length = hashSize;
  const data: [K, V][] = new Array(length);
  // TODO implement own static array
  // _length: number;
  // _data: [K, V][];
  // constructor(length: number) {
  //   this._length = length;
  //   this._data = new Array(length);
  // }
  const hash = (key: K): number => {
    let hashAddress: number;
    if (typeof key === 'number') hashAddress = key;
    if (typeof key === 'string') hashAddress = stringToCharCodeSum(key);
    if (typeof key === 'object' && key !== null)
      hashAddress = stringToCharCodeSum(Object.keys(key)[0]);
    if (typeof key === 'function') hashAddress = stringToCharCodeSum(key.name);
    else hashAddress = stringToCharCodeSum(`${key}`);
    // console.log(hashAddress % this._length);
    return hashAddress % length;
  };

  const set = (key: K, value: V) => {
    data[hash(key)] = [key, value];
    return this;
  };
  const get = (key: K): [K, V] | undefined => {
    return data[hash(key)];
  };

  return { data, length, set, get };
};

export default HashTable;
