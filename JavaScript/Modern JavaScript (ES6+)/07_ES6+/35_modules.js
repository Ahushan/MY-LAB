// 35 Modules

// Modules help organize code into separate files.
// Each file is treated as an independent module.


// 1 Basic Export & Import

// (Example: user.js)
export const name = "Ahushan";
export const age = 21;

export function greet() {
  return `Hello, ${name}!`;
}

// (Example: main.js)
import { name, age, greet } from "./user.js";

console.log(name); // "Ahushan"
console.log(age); // 21
console.log(greet()); // "Hello, Ahushan!"



// 2 Default Export

// (math.js)
export default function add(a, b) {
  return a + b;
}

// (main.js)
import add from "./math.js";
console.log("Sum:", add(10, 20)); // 30



// 3 Renaming Imports / Exports

// (file: utils.js)
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}

// (file: main.js)
import { multiply as mul, divide as div } from "./utils.js";
console.log("Multiply:", mul(5, 2)); // 10
console.log("Divide:", div(10, 2)); // 5



// 4 Import Everything

// (file: constants.js)
export const PI = 3.14159;
export const E = 2.71828;

// (file: main.js)
import * as constants from "./constants.js";
console.log("PI:", constants.PI);
console.log("E:", constants.E);



// 5 Combining Default & Named Exports

// (file: calculator.js)
export const subtract = (a, b) => a - b;
export default function multiplyMain(a, b) {
  return a * b;
}

// (file: main.js)
import multiplyMain, { subtract } from "./calculator.js";
console.log("Multiply:", multiplyMain(5, 4));
console.log("Subtract:", subtract(10, 4));



// 6 Exporting on the Fly

export const message = "Modules are powerful!";
export function displayMessage() {
  console.log(message);
}

// Export inline
export class User {
  constructor(username) {
    this.username = username;
  }
  display() {
    console.log(`Welcome ${this.username}`);
  }
}



// 7 Dynamic Imports (Advanced)

// Useful for lazy loading or conditional imports
async function loadModule() {
  if (Math.random() > 0.5) {
    const { greet } = await import("./user.js");
    console.log(greet());
  } else {
    const { default: add } = await import("./math.js");
    console.log("Dynamic Sum:", add(3, 7));
  }
}
loadModule();



// 8 Real-World Example: Organizing Features

/*
📁 project/
 ├── main.js
 ├── utils/
 │   ├── math.js
 │   ├── string.js
 │   └── date.js
 └── components/
     ├── header.js
     ├── footer.js
     └── sidebar.js
*/

// Example: utils/math.js
export function square(n) {
  return n * n;
}
export function cube(n) {
  return n * n * n;
}

// Example: main.js
import { square, cube } from "./utils/math.js";
console.log("Square:", square(4));
console.log("Cube:", cube(3));

/*
1. Use `export` to share variables, functions, or classes.
2. Use `import` to bring them into other files.
3. Default exports → `export default something`
4. Named exports → `export { a, b }`
5. Supports dynamic imports for async loading.
6. Promotes clean, maintainable, modular codebase.
7. Supported natively in modern browsers and Node (with `"type": "module"` in package.json).
*/
