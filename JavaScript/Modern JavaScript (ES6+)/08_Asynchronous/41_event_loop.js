// 41 Event Loop

// JavaScript is single-threaded, but can handle asynchronous operations via the event loop.
// Event Loop manages execution of code, callbacks, and promises.

// ---------------- Call Stack & Synchronous Code ----------------
console.log("Start"); // synchronous → goes to call stack
console.log("Middle");
console.log("End");

// ---------------- Asynchronous Code: setTimeout ----------------
setTimeout(() => {
  console.log("Inside setTimeout (0ms)"); // macrotask → queued
}, 0);

console.log("After setTimeout");

// Expected Output:
// Start
// Middle
// End
// After setTimeout
// Inside setTimeout (after 0ms)

// ---------------- Promises and Microtasks ----------------
Promise.resolve()
  .then(() => console.log("Promise 1 resolved"))
  .then(() => console.log("Promise 2 resolved"));

console.log("After Promises");

// Expected order:
// After Promises
// Promise 1 resolved
// Promise 2 resolved

// ---------------- Combined Example ----------------
console.log("1");

setTimeout(() => console.log("2 (setTimeout)"), 0);

Promise.resolve()
  .then(() => console.log("3 (Promise)"));

console.log("4");

// Expected Output:
// 1
// 4
// 3 (microtask)
// 2 (macrotask)

// ---------------- Real-world Analogy ----------------
/*
- Call Stack: where synchronous code is executed.
- Web APIs: handle async tasks (e.g., setTimeout, fetch).
- Task Queue / Callback Queue: stores callbacks for execution after stack is empty.
- Microtask Queue: Promises and process.nextTick in Node.js; executed before macrotasks.
- Event Loop: moves tasks from queues to stack when stack is empty.
*/

// ---------------- Async/Await and Event Loop ----------------
async function asyncFunc() {
  console.log("Async Start");
  await Promise.resolve();
  console.log("Async End"); // runs as microtask after synchronous code
}

asyncFunc();

console.log("Code after asyncFunc");

// Expected Output:
// Code after asyncFunc
// Async Start
// Async End

/*
- Synchronous code → call stack
- Asynchronous tasks → handled by Web APIs / Node APIs
- Promises → microtasks (executed before macrotasks)
- setTimeout → macrotasks
- Event loop ensures non-blocking behavior
*/
