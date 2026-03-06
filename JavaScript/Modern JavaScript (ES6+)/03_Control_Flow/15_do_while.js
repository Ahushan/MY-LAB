// DO-WHILE LOOP in JavaScript

// Basic usage
let i = 0;
do {
  console.log("Value of i:", i);
  i++;
} while (i < 3);

// Advanced: always executes at least once
let password = "";
do {
  password = "1234"; // Example (simulate user input)
  console.log("Password entered:", password);
} while (password !== "1234");

// Advanced: random number until condition
let num;
do {
  num = Math.floor(Math.random() * 10);
  console.log("Generated number:", num);
} while (num !== 7);

// Note: The do-while loop guarantees that the block of code runs at least once,
// even if the condition is false initially. This is different from the while loop,
// which checks the condition before executing the block of code.
// Use do-while when you need to ensure the code runs at least once before checking the condition.
// Note: The do-while loop is less commonly used than the while loop or for loop,
// but it can be useful in scenarios where the code must execute at least once.