// 33 Let Const

// 1 VAR vs LET vs CONST (Basic)

var a = 10;
let b = 20;
const c = 30;

console.log("var:", a, "let:", b, "const:", c);

// var → Function scoped
// let, const → Block scoped


// 2 Redeclaration & Reassignment

// var allows redeclaration
var x = 5;
var x = 10; // allowed
console.log("var redeclare:", x);

// let does NOT allow redeclaration
let y = 15;
// let y = 20;  Error: Identifier 'y' has already been declared

// but reassignment is allowed
y = 25; // 
console.log("let reassigned:", y);

// const does NOT allow redeclaration or reassignment
const z = 50;
// z = 60;  TypeError
console.log("const fixed:", z);


// 3 Block Scope Example

{
  var blockVar = "var: accessible outside block";
  let blockLet = "let: block scoped";
  const blockConst = "const: block scoped";
}

console.log(blockVar); // 
try {
  console.log(blockLet); //  ReferenceError
} catch (err) {
  console.log("Error accessing blockLet:", err.message);
}


// 4 Hoisting Difference

console.log(hoistVar); // undefined (hoisted)
var hoistVar = "I am hoisted";

// console.log(hoistLet); //  ReferenceError (Temporal Dead Zone)
let hoistLet = "I'm declared later";


// 5️⃣ CONST with Objects & Arrays

const person = {
  name: "Ahushan",
  age: 21,
};

//  person = {}; (not allowed — reference can't change)

//  But we can modify object properties
person.age = 22;
console.log("Modified const object:", person);

//  Same with arrays
const numbers = [1, 2, 3];
numbers.push(4); // allowed
console.log("Modified const array:", numbers);


// 6 Temporal Dead Zone (TDZ)

{
  // Accessing variable before declaration in same block → TDZ error
  // console.log(foo); //  ReferenceError
  let foo = "Declared after access";
  console.log("Access after declaration:", foo);
}


// 7 Real-world Usage Example

function exampleES6() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let loop:", i), 1000);
  }

  for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log("var loop:", j), 1000);
  }
}
exampleES6();
// Output after 1s:
// let loop: 0, 1, 2 (correct behavior due to block scope)
// var loop: 3, 3, 3 (because var is function scoped)


// 8 Use Cases Summary

/*
 Use 'const' by default.
 Use 'let' when you know the value will change.
 Avoid 'var' in modern JS — causes hoisting & scoping issues.
*/

