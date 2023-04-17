function stringToCharCodeSum(str: string): number {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += str.charCodeAt(i);
  }
  return result;
}

export default stringToCharCodeSum;
