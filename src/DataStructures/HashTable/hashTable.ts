import stringToCharCodeSum from '../../utils/stringToCharCodeSum';

type HashTableType<K, V> = {
  get: (key: K) => V | undefined;
  set: (key: K, value: V) => void;
  keys: () => K[];
  values: () => V[];
  has: (key: K) => boolean;
  remove: (key: K) => V | undefined;
  clear: () => void;
  forEach: (callback: (key: K, value: V) => void) => void;
};

const HashTable = <K, V>(hashSize: number): HashTableType<K, V> => {
  const length = hashSize;
  // TODO implement own static array
  let data: [K, V][][] = new Array(length);

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
  // PRIVATE
  const searchBucket = (key: K, memoryAddress: number): number | undefined => {
    if (!data[memoryAddress]) return undefined;
    for (let i = 0; i < data[memoryAddress].length; i += 1) {
      if (data[memoryAddress][i][0] === key) return i;
    }
    return -1;
  };
  // PUBLIC
  const forEach = (callback: (key: K, value: V) => void) => {
    data.forEach((bucket) => {
      bucket.forEach((item) => {
        callback(item[0], item[1]);
      });
    });
  };

  const set = (key: K, value: V) => {
    const memoryAddress = hash(key);
    const keyExists = searchBucket(key, memoryAddress);
    // bucket is empty
    if (keyExists === undefined) data[memoryAddress] = [[key, value]];
    // bucket does not have key in it
    else if (keyExists === -1) data[memoryAddress].push([key, value]);
    // bucket has key in it
    else data[memoryAddress][keyExists][1] = value;
  };

  const get = (key: K): V | undefined => {
    const memoryAddress = hash(key);
    const result = data[memoryAddress]?.find((arr) => arr[0] === key);
    return result ? result[1] : result;
  };

  const keys = (): K[] => {
    const hashKeys: K[] = [];
    forEach((k) => hashKeys.push(k));
    return hashKeys;
  };

  const values = (): V[] => {
    const hashValues: V[] = [];
    forEach((k, v) => hashValues.push(v));
    return hashValues;
  };

  const clear = () => {
    data = new Array(length);
  };

  const remove = (key: K): V | undefined => {
    const memoryAddress = hash(key);
    const exists = searchBucket(key, memoryAddress);
    if (exists === undefined || exists === -1) return undefined;
    const value = data[memoryAddress][exists][1];
    data[memoryAddress] = data[memoryAddress].filter((ele) => ele[0] !== key);
    return value;
  };

  const has = (key: K): boolean => {
    const memoryAddress = hash(key);
    const exists = searchBucket(key, memoryAddress);
    return exists !== undefined && exists !== -1;
  };

  return {
    set,
    get,
    keys,
    values,
    clear,
    remove,
    has,
    forEach,
  };
};

export default HashTable;
