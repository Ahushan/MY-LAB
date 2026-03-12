// WHILE LOOP in JavaScript

// Basic usage
let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}

// Advanced: reading until condition
let n = 0;
while (n < 5) {
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  }
  n++;
}

// Advanced: infinite loop with break
let x = 0;
while (true) {
  if (x === 3) break;
  console.log("Infinite loop stopped at:", x);
  x++;
}
// Note: Be cautious with infinite loops; ensure there's a break condition to avoid freezing your program.
// Infinite loops can be useful in certain scenarios, such as waiting for user input or events.