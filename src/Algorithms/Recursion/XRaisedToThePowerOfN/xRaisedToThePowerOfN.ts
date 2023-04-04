function xRaisedToPowerOfN(x: number, n: number): number | never {
  // Special rules
  if (!Number.isInteger(n)) throw new Error('n must be integer not float');
  if (n < 0) throw new Error('n must be a positive number');
  if (n === 0) return 1;
  // Recursion
  if (n === 1) return x; // base case
  return x * xRaisedToPowerOfN(x, n - 1); // recursive case
}

export default xRaisedToPowerOfN;
