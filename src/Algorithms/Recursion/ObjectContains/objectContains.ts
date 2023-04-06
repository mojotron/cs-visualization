type InputType = boolean | string | number;

function objectContains(obj: object, value: InputType): boolean {
  // eslint-disable-next-line consistent-return
  Object.values(obj).forEach((ele) => {
    if (ele === value) return true;
    if (typeof ele === 'object') return objectContains(ele, value);
  });
  return false;
}

export default objectContains;
