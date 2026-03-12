class Calculator {
  // Static property
  static pi = 3.14159;

  // Static method
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Accessing static members using class name
console.log("PI:", Calculator.pi);           // 3.14159
console.log("Add:", Calculator.add(5, 3));   // 8
console.log("Multiply:", Calculator.multiply(4, 6)); // 24

// Instance cannot access static members
const calc = new Calculator();
console.log(calc.add); // undefined
