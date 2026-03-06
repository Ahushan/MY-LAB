// FUNCTION BASICS in JavaScript

// Basic function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log("Sum:", add(5, 10));

// Advanced: function inside an object (method)
const calculator = {
  multiply(x, y) {
    return x * y;
  },
};
console.log("Multiplication:", calculator.multiply(4, 6));

// Advanced: higher-order function (takes function as argument)
function operate(a, b, operation) {
  return operation(a, b);
}
console.log(
  "Higher-order add:",
  operate(3, 4, function (x, y) {
    return x + y;
  })
);
