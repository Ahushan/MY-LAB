//MARK: Ternary Operator in JavaScript
let marks = 75;

// Basic ternary
let result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);

// Nested ternary
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "D";
console.log("Grade:", grade);

// Example Combining All
let ageCheck = 20;
let status = ageCheck >= 18 ? "Adult" : "Minor";
console.log(`The person is an ${status}.`);

let access = ageCheck >= 18 ? (marks >= 40 ? "Allowed to vote" : "Not allowed to vote due to marks") : "Not allowed to vote due to age";
console.log(access);