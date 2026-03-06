// ARROW FUNCTIONS in JavaScript

// Basic arrow function
const square = (n) => n * n;
console.log("Square:", square(5));

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log("Sum:", add(3, 7));

// Advanced: arrow function with array methods
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// Advanced: lexical `this` behavior
const person = {
  name: "Alice",
  regularFn: function () {
    console.log("Regular Fn this.name:", this.name);
  },
  arrowFn: () => {
    console.log("Arrow Fn this.name:", this.name); // undefined (lexical scope)
  },
};
person.regularFn();
person.arrowFn();
