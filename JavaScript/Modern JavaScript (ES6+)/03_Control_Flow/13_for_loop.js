// FOR LOOP in JavaScript

// Basic usage
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// Advanced: nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// Advanced: for...in loop
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}

// Advanced: for...of loop
let numbers = [10, 20, 30];
for (let num of numbers) {
  console.log("Value using for...of:", num);
}
// Note: for...of works with iterable objects like arrays, strings, etc.
// It does not work with plain objects.
// For plain objects, use for...in or Object.keys()/Object.values()/Object.entries()