function reverseString(str: string): string {
  // Recursion
  if (str.length === 0) return str; // base case
  return reverseString(str.slice(1)) + str[0]; // recursive case
}

export default reverseString;
