// ARRAY BASICS in JavaScript

// --------- Basic Array ---------
let fruits = ["apple", "banana", "cherry"];
console.log("Original Array:", fruits);

// Access elements
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);

// Modify elements
fruits[1] = "blueberry";
console.log("Modified Array:", fruits);

// Length of array
console.log("Array Length:", fruits.length);

// Adding elements
fruits.push("orange"); // end
fruits.unshift("mango"); // start
console.log("After Push/Unshift:", fruits);

// Removing elements
fruits.pop(); // removes last
fruits.shift(); // removes first
console.log("After Pop/Shift:", fruits);

// Copying arrays
const copyFruits = [...fruits];
console.log("Copied Array:", copyFruits);

// Joining elements
console.log("Joined String:", fruits.join(", "));

// Slicing and Splicing
console.log("Slice(1,3):", fruits.slice(1, 3)); // does not mutate
fruits.splice(1, 1, "kiwi", "pineapple"); // mutates
console.log("After Splice:", fruits);

// Sorting and reversing
fruits.sort();
console.log("Sorted:", fruits);
fruits.reverse();
console.log("Reversed:", fruits);
