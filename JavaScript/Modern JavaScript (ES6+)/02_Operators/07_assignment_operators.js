//MARK: Assignment Operators in JavaScript
let x = 10;
console.log("Initial Value of x:", x);

// Basic assignment
x = 20;
console.log("After assignment (x = 20):", x);

// Addition assignment
x += 5; // same as x = x + 5
console.log("After x += 5:", x);

// Subtraction assignment
x -= 3; // same as x = x - 3
console.log("After x -= 3:", x);

// Multiplication assignment
x *= 2; // same as x = x * 2
console.log("After x *= 2:", x);

// Division assignment
x /= 4; // same as x = x / 4
console.log("After x /= 4:", x);

// Modulus assignment
x %= 3; // same as x = x % 3
console.log("After x %= 3:", x);

// Example Combining All
let price = 100;
let discount = 20;
price -= discount; // applying discount
console.log("Final Price after discount:", price);
