type InputType = string | number | boolean;

function checkAllValuesInArray(
  arr: InputType[],
  cb: (ele: InputType) => boolean
): boolean {
  // Recursion
  if (arr.length === 0) return true; // base case
  const firstElementCheck = cb(arr[0]);
  // recursive call
  return firstElementCheck ? checkAllValuesInArray(arr.slice(1), cb) : false;
}

export default checkAllValuesInArray;
