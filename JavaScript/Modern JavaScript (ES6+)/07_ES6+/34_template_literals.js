// 34 Template Literals


// 1 Basic Usage

let name = "Ahushan";
let age = 21;

// Old way (string concatenation)
console.log("Old Way:", "My name is " + name + " and I am " + age + " years old.");

// Using template literals
console.log(`New Way: My name is ${name} and I am ${age} years old.`);


// 2 Multi-line Strings

let message = `Hello ${name},
Welcome to JavaScript ES6+!
You are ${age} years young.`;

console.log("Multi-line Template:\n", message);


// 3 Expression Evaluation

let a = 10, b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}.`);
console.log(`Next year you will be ${age + 1} years old.`);


// 4 Function Calls Inside Template

function greet(user) {
  return `Hello, ${user.toUpperCase()}!`;
}
console.log(`${greet(name)} Welcome back.`);


// 5 Nesting and Conditional Expressions

let isAdmin = true;
console.log(`Access Level: ${isAdmin ? "Admin Panel" : "User Dashboard"}`);

let marks = 85;
console.log(`Result: ${marks >= 50 ? "Pass 🎉" : "Fail ❌"}`);


// 6 Tagged Template Literals (Advanced)

// Allows custom processing of template strings

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}<strong>${values[i] || ""}</strong>`,
    ""
  );
}

let topic = "Template Literals";
let difficulty = "Advanced";
let output = highlight`Learning ${topic} is ${difficulty}!`;
console.log("Tagged Template Output:", output);


// 7 Escaping Backticks

let example = `To use backticks in a string, use \\\` like this.`;
console.log(example);


// 8 Real-world Example

const user = {
  name: "Ahushan",
  role: "Full Stack Developer",
  skills: ["JavaScript", "React", "Node.js"],
};

const profile = `
👤 Name: ${user.name}
💼 Role: ${user.role}
💡 Skills: ${user.skills.join(", ")}
`;

console.log("User Profile:\n", profile);


//  Summary

/*
1. Easier string concatenation using backticks (` `)
2. Multi-line strings without '\n'
3. Embed variables or expressions with ${...}
4. Tagged templates for advanced formatting
5. Great for dynamic content in UI or console
*/

