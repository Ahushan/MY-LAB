// ADVANCED ARRAY PATTERNS

const numbers = [1, 2, 3, 4, 5];

// 1. Immutability with spread and map/filter
const incremented = numbers.map((n) => n + 1); // creates new array
console.log("Original:", numbers);
console.log("Incremented:", incremented);

// 2. Method chaining
const sumOfSquaresEven = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n ** 2)
  .reduce((acc, n) => acc + n, 0);
console.log("Sum of squares of even numbers:", sumOfSquaresEven);

// 3. Flattening & transforming nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flatDoubled = nested.flatMap((row) => row.map((n) => n * 2));
console.log("Flattened & Doubled:", flatDoubled);

// 4. Functional programming style
const result = numbers
  .filter((n) => n > 2)
  .map((n) => n * 3)
  .reduce((acc, n) => acc + n, 0);
console.log("Functional Result:", result);

// 5. Avoid mutation with slice + concat
const newNumbers = numbers.slice(0, 2).concat([99, 100]);
console.log("Original:", numbers, "| New:", newNumbers);

// 6. Using spread for immutability
const updated = [...numbers, 6, 7];
console.log("Updated with spread:", updated);

// 7. Advanced: Using reduce to remove duplicates
const numsWithDuplicates = [1, 2, 2, 3, 3, 4];
const unique = numsWithDuplicates.reduce((acc, n) => {
  if (!acc.includes(n)) acc.push(n);
  return acc;
}, []);
console.log("Unique Numbers:", unique);
