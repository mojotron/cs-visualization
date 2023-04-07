/* eslint-disable no-restricted-syntax, guard-for-in, consistent-return */

type NestedArray<T> = Array<T> | Array<NestedArray<T>> | T;
type InputType = boolean | string | number | null | undefined;
type InputLiteralType = 'boolean' | 'string' | 'number' | 'null' | 'undefined';

function parseMultiDimensionalArray(
  arr: NestedArray<InputType>,
  type: InputLiteralType
): number {
  let counter = 0;
  // to remove ts error  Type Object must have a Symbol.iterator [...[arr]].flat()
  for (const ele of [...[arr]].flat()) {
    if (typeof ele === type) counter += 1;
    if (Array.isArray(ele)) counter += parseMultiDimensionalArray(ele, type);
  }
  return counter;
}

export default parseMultiDimensionalArray;
