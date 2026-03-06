// IF-ELSE in JavaScript

let age = 20;

// Basic usage
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Advanced usage
if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// Ternary operator shorthand
console.log(age >= 18 ? "Adult (ternary)" : "Minor (ternary)");
