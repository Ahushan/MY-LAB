// SPREAD OPERATOR in JavaScript

// Basic usage: cloning an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log("Cloned Array:", arr2);

// Adding elements while cloning
const arr3 = [...arr1, 4, 5];
console.log("Extended Array:", arr3);

// Cloning objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 };
console.log("Cloned Object:", obj2);

// Adding/overwriting properties
const obj3 = { ...obj1, country: "USA", age: 30 };
console.log("Updated Object:", obj3);

// Spread in function calls
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log("Sum using spread:", sum(...numbers));

// Advanced: combining arrays
const arr4 = [10, 20];
const arr5 = [30, 40];
const combined = [...arr4, ...arr5];
console.log("Combined Arrays:", combined);

// Advanced: merging objects
const obj4 = { x: 1, y: 2 };
const obj5 = { y: 3, z: 4 };
const merged = { ...obj4, ...obj5 };
console.log("Merged Objects:", merged);

// Note: Spread operator creates shallow copies
const nestedArr1 = [[1, 2], [3, 4]];
const nestedArr2 = [...nestedArr1];
nestedArr2[0][0] = 99;
console.log("Original Nested Array after modification:", nestedArr1);
console.log("Cloned Nested Array after modification:", nestedArr2);

// Conclusion: The spread operator is a powerful feature in JavaScript for cloning and merging arrays and objects, as well as for function calls.