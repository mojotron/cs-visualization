import HashTable from '../hashTable';

function firstRecurringElement<T>(arr: T[], hashSize = 25) {
  const ht = HashTable<T, boolean>(hashSize);
  for (let i = 0; i < arr.length; i += 1) {
    if (ht.has(arr[i])) return arr[i];
    ht.set(arr[i], true);
  }
  return false;
}

export default firstRecurringElement;
