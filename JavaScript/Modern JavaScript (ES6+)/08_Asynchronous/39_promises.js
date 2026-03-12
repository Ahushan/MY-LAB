// 39 Promises

// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

//  Basic Promise 
const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});
console.log(`promise1 :`,promise1);

promise1
  .then((message) => console.log("Then:", message))
  .catch((error) => console.error("Catch:", error));

//  Promise Chaining 
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
});

promise2
  .then((num) => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Step 2:", num);
    return num + 5;
  })
  .then((num) => console.log("Step 3:", num))
  .catch((err) => console.error(err));

//  Real-world Example (Fetch API) 
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Network error.");
    const data = await response.json();
    console.log("Fetched Posts (first 3):", data.slice(0, 3));
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
}

fetchPosts();

//  Promise.all 
// Wait for multiple promises to complete
const promiseA = new Promise((res) => setTimeout(() => res("A done"), 1000));
const promiseB = new Promise((res) => setTimeout(() => res("B done"), 2000));
const promiseC = new Promise((res, rej) => setTimeout(() => rej("C failed"), 1500));

Promise.all([promiseA, promiseB])
  .then((results) => console.log("All results:", results))
  .catch((err) => console.error("Error in Promise.all:", err));

//  Promise.race 
// Returns the first settled promise
Promise.race([promiseA, promiseB, promiseC])
  .then((result) => console.log("Race winner:", result))
  .catch((err) => console.error("Race error:", err));

/*
- Promises solve callback hell by providing clean chaining.
- `then()` handles success, `catch()` handles failure.
- `finally()` can be used to execute code regardless of result.
- Useful for asynchronous tasks like API calls, file reading, timers, etc.
*/
