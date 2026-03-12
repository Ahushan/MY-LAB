// ARRAY SORTING METHODS

let numbers = [10, 2, 30, 22, 5];

// 1. Default sort (lexicographic)
console.log("Default sort:", [...numbers].sort());

// 2. Numeric ascending
console.log(
  "Numeric Ascending:",
  [...numbers].sort((a, b) => a - b)
);

// 3. Numeric descending
console.log(
  "Numeric Descending:",
  [...numbers].sort((a, b) => b - a)
);

// 4. Sorting objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
];
users.sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", users);

// --- Advanced Usage ---

// Multi-level sorting
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 800 },
];
products.sort((a, b) => (a.price - b.price) || a.name.localeCompare(b.name));
console.log("Products sorted by price then name:", products);

// Reverse array
console.log("Reversed Numbers:", [...numbers].reverse());
