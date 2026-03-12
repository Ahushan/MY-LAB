//MARK: Arithmetic Operators in JavaScript
let a = 10,
  b = 20;
console.log("Addition:", a + b); // 30
console.log("Subtraction:", a - b); // -10
console.log("Multiplication:", a * b); // 200
console.log("Division:", a / b); // 0.5
console.log("Modulus:", a % b); // 10
console.log("Increment (a):", ++a); // 11
console.log("Decrement (b):", --b); // 19

//MARK: Example Combining All Concepts
let length = 5,
  width = 10; // Declaring variables
let area = length * width; // Using arithmetic operator
console.log("Area of the Rectangle:", area); // Printing the result

let input = "25"; // Example input as a string
let parsedAge = Number(input); // Type conversion to number
console.log("Parsed Age:", parsedAge); // Output: 25

// Comparison: Is the person an adult?
{
  let name = `Ahushan`;
  if (parsedAge >= 18) {
    console.log(`${name} is an adult.`);
  } else {
    console.log(`${name} is not an adult.`);
  }
}

// Explanation of Coercion
console.log("Coercion Example:", "10" - 2); // Outputs: 8 (string converted to number)
let age = 25;
console.log("String Concatenation Example:", "Age is " + age); // Outputs: "Age is 25"
