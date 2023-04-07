type InputType = boolean | string | number;

function objectContains(obj: object, value: InputType): boolean {
  let found = false;
  // eslint-disable-next-line consistent-return
  Object.values(obj).forEach((ele) => {
    if (ele === value) found = true; // base case
    if (typeof ele === 'object' && found === false) {
      found = objectContains(ele, value); // recursive case
    }
  });
  return found;
}

export default objectContains;
