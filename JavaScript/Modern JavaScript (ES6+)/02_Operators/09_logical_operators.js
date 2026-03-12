//MARK: Logical Operators in JavaScript
let isAdult = true;
let hasID = false;

console.log("Logical AND (&&):", isAdult && hasID); // false
console.log("Logical OR (||):", isAdult || hasID); // true
console.log("Logical NOT (!):", !isAdult); // false

// Example Combining All
if (isAdult && hasID) {
  console.log("Entry allowed.");
} else if (isAdult || hasID) {
  console.log("Partial access allowed.");
} else {
  console.log("Access denied.");
}
