const fibonacciWithCalls = () => {
  let calls = 0;

  const getCalls = () => calls;

  const fibonacci = (number: number): number => {
    calls += 1;
    if (number <= 1) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
  };

  return { fibonacci, getCalls };
};

const fibonacciMemoized = () => {
  const cache: { [key: number]: number } = {};
  let calls = 0; // only for testing/learning

  const getCalls = () => calls;

  const fibonacci = (number: number): number => {
    calls += 1;
    if (cache[number]) return cache[number];

    if (number <= 1) {
      cache[number] = number;
      return number;
    }
    const result = fibonacci(number - 1) + fibonacci(number - 2);
    cache[number] = result;
    return result;
  };

  return { fibonacci, getCalls };
};

export { fibonacciWithCalls, fibonacciMemoized };
