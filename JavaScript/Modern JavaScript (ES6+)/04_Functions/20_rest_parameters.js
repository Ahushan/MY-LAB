// REST PARAMETERS in JavaScript

// Basic usage
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));

// Advanced: mix with normal parameters
function greet(greeting, ...names) {
  return `${greeting} ${names.join(", ")}`;
}
console.log(greet("Hello", "Alice", "Bob", "Charlie"));

// Advanced: cloning arrays with spread/rest
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Cloned + Extended Array:", arr2);

// Advanced: function with fixed and variable arguments
function createUser(username, ...roles) {
    return { username, roles };
}
const user = createUser("john_doe", "admin", "editor");
console.log("User:", user);