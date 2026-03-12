// ARRAY METHODS

let fruits = ["apple", "kiwi", "pineapple"];

// Iteration methods
fruits.forEach((fruit, index) => console.log(`Index ${index}: ${fruit}`));

// Searching
console.log("Index of cherry:", fruits.indexOf("cherry"));
console.log("Includes banana?", fruits.includes("banana"));

// Nested arrays
let matrix = [
  [1, 2],
  [3, 4],
];
console.log("Matrix:", matrix);
console.log("Matrix Element [1][0]:", matrix[1][0]);

// Flatten nested array
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened:", nested.flat(2)); // depth 2
