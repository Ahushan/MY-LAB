// ARRAY SEARCHING METHODS

const numbers = [10, 20, 30, 40, 50, 60];

// 1. find - returns the first element that satisfies condition
const firstOver25 = numbers.find((n) => n > 25);
console.log("First number > 25:", firstOver25);

// 2. findIndex - returns index of first element that satisfies condition
const indexOver25 = numbers.findIndex((n) => n > 25);
console.log("Index of first number > 25:", indexOver25);

// 3. some - returns true if at least one element satisfies condition
const hasEven = numbers.some((n) => n % 2 === 0);
console.log("Has Even Number?", hasEven);

// 4. every - returns true if all elements satisfy condition
const allPositive = numbers.every((n) => n > 0);
console.log("All Positive?", allPositive);

// 5. includes - checks if array contains a value
console.log("Includes 30?", numbers.includes(30));

// 6. indexOf & lastIndexOf
console.log("Index of 40:", numbers.indexOf(40));
const numsWithDuplicates = [1, 2, 3, 2, 1];
console.log("Last index of 2:", numsWithDuplicates.lastIndexOf(2));

// --- Advanced Usage ---

// Combining search methods with map/filter
const over25Squared = numbers.filter((n) => n > 25).map((n) => n ** 2);
console.log("Numbers > 25 squared:", over25Squared);

// Using some/every for complex objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const allAdults = users.every((u) => u.age >= 18);
const hasMinor = users.some((u) => u.age < 18);
console.log("All Adults?", allAdults, "| Has Minor?", hasMinor);
