// ARRAY ITERATION METHODS

const numbers = [1, 2, 3, 4, 5];

// 1. forEach - iterate without returning
numbers.forEach((n, i) => console.log(`Index ${i}: ${n}`));

// 2. map - returns new array after transformation
const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);

// 3. filter - returns array with elements that satisfy condition
const evens = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evens);

// 4. reduce - aggregate values into single result
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// 5. reduceRight - reduce from right to left
const concatRight = numbers.reduceRight((acc, n) => acc + n, "");
console.log("ReduceRight concat:", concatRight);

// 6. for...of - iteration over values
for (let n of numbers) console.log("For...of:", n);

// 7. for...in - iteration over indices
for (let i in numbers) console.log("For...in index:", i);

// --- Advanced Usage ---

// Chaining iteration methods
const processed = numbers
  .filter((n) => n % 2 !== 0)
  .map((n) => n ** 2)
  .reduce((acc, n) => acc + n, 0);
console.log("Sum of squares of odd numbers:", processed);

// Iterating over nested arrays
const matrix = [
  [1, 2],
  [3, 4],
];
matrix.forEach((row) =>
  row.forEach((val) => console.log("Matrix Value:", val))
);
