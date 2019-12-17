// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    // const result = fn.apply(this, args);
    const result = fn(...args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib);

//Solution 1: Use 3 variables
/*
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let sum = 0;
  let n_2 = 0;
  let n_1 = 1;
  for (let i = 2; i <= n; i++) {
    sum = n_2 + n_1;
    n_2 = n_1;
    n_1 = sum;
  }
  return sum;*/
//Solution 2: Use an array to hold the previous values
/*let results = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = results[i - 1];
    const b = results[i - 2];
    //results[i] = a + b;
    results.push(a + b);
  }
  return results[n];
  */

module.exports = fib;
