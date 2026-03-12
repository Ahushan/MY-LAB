//MARK: Comparison Operators in JavaScript
let p = 10, q = "10";

console.log("Equal (==):", p == q);   // true (value comparison with coercion)
console.log("Strict Equal (===):", p === q); // false (type mismatch)
console.log("Not Equal (!=):", p != q); // false
console.log("Strict Not Equal (!==):", p !== q); // true
console.log("Greater Than (>):", p > 5); // true
console.log("Less Than (<):", p < 5); // false
console.log("Greater or Equal (>=):", p >= 10); // true
console.log("Less or Equal (<=):", p <= 10); // true

// Example Combining All
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
