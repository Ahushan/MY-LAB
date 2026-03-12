// 40 Async Await

// Async/Await is syntactic sugar over Promises
// Makes asynchronous code look synchronous

// ---------------- Basic Async Function ----------------
async function greet() {
  return "Hello, Async/Await!";
}

greet()
  .then((message) => console.log(message))
  .catch((err) => console.error(err));

// ---------------- Await inside Async Function ----------------
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncExample() {
  console.log("Start");
  await wait(1000); // pause for 1 second
  console.log("After 1 second");
  await wait(2000);
  console.log("After 3 seconds");
}

asyncExample();

// ---------------- Handling Errors ----------------
async function errorExample() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
    if (!response.ok) throw new Error("Network error");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Caught Error:", error.message);
  } finally {
    console.log("Async function finished ");
  }
}

errorExample();

// ---------------- Real-world Example: Fetch API ----------------
async function fetchPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    let posts = await response.json();
    console.log("First 3 Posts:", posts.slice(0, 3));
  } catch (err) {
    console.error(err.message);
  }
}

fetchPosts();

// ---------------- Comparison: Promise vs Async/Await ----------------

// Using Promise chaining
function getNumberPromise() {
  return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
}

getNumberPromise()
  .then((num) => num * 2)
  .then((num) => console.log("Promise Result:", num));

// Using Async/Await
async function getNumberAsync() {
  let num = await getNumberPromise();
  num *= 2;
  console.log("Async/Await Result:", num);
}

getNumberAsync();

/*
- Async functions always return a Promise.
- `await` pauses execution until the Promise resolves.
- Makes asynchronous code cleaner than nested `.then()` chains.
- Use try/catch for error handling.
- Ideal for API calls, timers, or sequential async tasks.
*/
