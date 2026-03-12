// BREAK and CONTINUE in JavaScript

// ----------- BREAK -----------
// Basic usage: stop loop when condition is met
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at i =", i);
    break;
  }
  console.log("Break Example:", i);
}

// Advanced: nested loops with break
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`Breaking inner loop when j=${j}`);
      break; // exits only inner loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// ----------- CONTINUE -----------
// Basic usage: skip one iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping i =", i);
    continue;
  }
  console.log("Continue Example:", i);
}

// Advanced: skip even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log("Odd number:", i);
}

// ----------- LABELED LOOPS -----------
// Advanced: break or continue an outer loop
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Breaking outer loop at i=2, j=2");
      break outerLoop;
    }
    console.log(`Labeled loop -> i=${i}, j=${j}`);
  }
}
// Note: Labeled loops can be useful but should be used sparingly for clarity.