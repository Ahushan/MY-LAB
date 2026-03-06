// 04 Data Types

//MARK: 4. Data Types in JavaScript
let number = 42; // Number
let str = "Hello, JavaScript!"; // String
let isActive = true; // Boolean
let person = null; // Null
let notDefined; // Undefined
let bigNum = 1234567890123456789012345678901234567890n; // BigInt

console.log(
  "Data Types:",
  typeof number,
  typeof str,
  typeof isActive,
  typeof person,
  typeof notDefined,
  typeof bigNum,
);

let sym = Symbol("unique"); // Symbol
console.log("Symbol Type:", typeof sym);
let obj = { name: "Alice", age: 30 }; // Object
console.log("Object Type:", typeof obj);

function demoType() {}
console.log("Function type:", typeof demoType);

