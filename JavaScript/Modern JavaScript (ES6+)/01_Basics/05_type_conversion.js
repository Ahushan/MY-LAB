//MARK: 5. Type Conversion in JavaScript
let numStr = "100";
let convertedNum = Number(numStr); // Converts string to number
console.log(
  "Converted Number:",
  convertedNum,
  " type is : ",
  typeof convertedNum
); // Outputs: 100

let boolValue = false;
let stringBool = String(boolValue); // Converts boolean to string
console.log(
  "Converted String from Boolean:",
  stringBool,
  " type is : ",
  typeof stringBool
); // Outputs: "false"

//MARK: 6. Type Coercion in JavaScript
let result1 = "5" + 5; // Type coercion converts the number to a string
let result2 = "5" - 2; // Type coercion converts the string to a number
console.log("Type Coercion Results:", result1, result2); // Outputs: "55", 3

//MARK: 7. Practical Examples of Type Conversion and Coercion
let userInput = "42";
let age = parseInt(userInput); // Converts string to integer
console.log("User Age:", age, " type is : ", typeof age); // Outputs: 42

// Concatenation example
let greeting = "Hello, " + "world!"; // String concatenation
console.log("Greeting:", greeting); // Outputs: "Hello, world!"

// Arithmetic example
let total = "10" * 2; // Type coercion converts the string to a number
console.log("Total:", total, " type is : ", typeof total); // Outputs: 20

