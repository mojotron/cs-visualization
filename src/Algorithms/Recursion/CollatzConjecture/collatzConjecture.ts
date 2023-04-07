function collatzConjecture(integer: number): number | never {
  if (integer < 1 || !Number.isInteger(integer))
    throw new Error('input must be integer greater then the 0');

  // stop at 1
  // even collatzConjecture(integer / 2)
  // odd collatzConjecture(3 * integer + 1);
}

export default collatzConjecture;
