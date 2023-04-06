/* eslint-disable no-restricted-syntax, guard-for-in, consistent-return */
type NestedArray<T> = Array<T> | Array<NestedArray<T>> | number;

function sumOfSquaresInMultidimensionalArray(arr: NestedArray<number>): number {
  let total = 0;
  // to remove ts error  Type Object must have a Symbol.iterator [...[arr]].flat()
  for (const ele of [...[arr]].flat()) {
    if (Array.isArray(ele)) total += sumOfSquaresInMultidimensionalArray(ele);
    if (typeof ele === 'number') total += ele * 2;
  }
  return total;
}

export default sumOfSquaresInMultidimensionalArray;
