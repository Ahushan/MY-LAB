// NESTED ARRAYS in JavaScript

// --------- Basic Nested Array ---------
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log("Matrix:", matrix);

// Access elements
console.log("Element [0][1]:", matrix[0][1]); // 2
console.log("Element [2][0]:", matrix[2][0]); // 5

// Modify elements
matrix[1][1] = 40;
console.log("Modified Matrix:", matrix);

// --------- Advanced Nested Array ---------

// Loop through nested arrays
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element [${i}][${j}]:`, matrix[i][j]);
  }
}

// Using for...of for cleaner iteration
for (let row of matrix) {
  for (let val of row) {
    console.log("Value:", val);
  }
}

// Flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flatten Depth 1:", nested.flat()); // [1,2,3,4,[5,6]]
console.log("Flatten Depth 2:", nested.flat(2)); // [1,2,3,4,5,6]

// Using flatMap for mapping + flattening
let phrases = ["hello world", "js is fun"];
let words = phrases.flatMap((phrase) => phrase.split(" "));
console.log("FlatMap Result:", words); // ['hello','world','js','is','fun']

// Deep copy nested array (advanced)
let deepCopy = JSON.parse(JSON.stringify(nested));
console.log("Deep Copy:", deepCopy);

// Using nested array with map
let squaredMatrix = matrix.map((row) => row.map((val) => val ** 2));
console.log("Squared Matrix:", squaredMatrix);

// Advanced: reduce nested array into a single array
let flattened = matrix.reduce((acc, row) => acc.concat(row), []);
console.log("Flattened using reduce:", flattened);
