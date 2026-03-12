// DEFAULT PARAMETERS in JavaScript

// Basic default parameter
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet("Alice");
greet(); // uses default "Guest"

// Advanced: default with expressions
function calculatePrice(price, tax = price * 0.05) {
  return price + tax;
}
console.log("Price with tax:", calculatePrice(100));
console.log("Price with custom tax:", calculatePrice(100, 20));

// Advanced: default with another function
function randomNumber() {
  return Math.floor(Math.random() * 10);
}
function showNumber(num = randomNumber()) {
  console.log("Number:", num);
}
showNumber();

