class Example {
  constructor(name) {
    this.name = name;
  }

  // method: 'this' -> instance
  getName() {
    return this.name;
  }

  // arrow method: 'this' lexically bound to instance
  getNameArrow = () => this.name;

  // method demonstrating losing 'this' if not bound
  unboundMethod() {
    return this.name;
  }
}

const ex = new Example("Ahushan");
console.log(ex.getName());       // Ahushan
console.log(ex.getNameArrow());  // Ahushan

// lose 'this' when extracting method reference
const f = ex.unboundMethod;
try {
  console.log(f()); // likely undefined or error in strict mode
} catch (e) {
  console.log("lost this ->", e.message);
}

// fix by binding
const bound = ex.unboundMethod.bind(ex);
console.log(bound()); // Ahushan

// arrow functions inherit surrounding 'this'
function Outer() {
  this.value = 42;
  this.arrow = () => this.value; // arrow captures this from Outer
}
const o = new Outer();
console.log(o.arrow()); // 42
