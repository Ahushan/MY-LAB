// 38 Callbacks

// A callback is a function passed as an argument to another function.
// It allows asynchronous or sequential operations.

// ---------------- Basic Example ----------------

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Ahushan", sayGoodbye);

// ---------------- Callback with Anonymous Function ----------------

function calculate(a, b, operation) {
  return operation(a, b); // operation is a callback
}

let sum = calculate(5, 3, function (x, y) {
  return x + y;
});

console.log("Sum:", sum);

// ---------------- Real-world Example (Simulating Async Task) ----------------

console.log("Start");

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback(); // callback executed after fetching
  }, 2000);
}

fetchData(() => {
  console.log("Processing fetched data...");
});

console.log("End");

// ---------------- Callback Hell Example ---------------

setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
      console.log("All tasks done!");
    }, 1000);
  }, 1000);
}, 1000);

// Callback hell happens when multiple asynchronous tasks are nested inside each other,
// making the code difficult to read and maintain.

// Later, Promises and async/await were introduced to solve this problem.
