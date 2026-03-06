// 30 This Keyword
// Understanding 'this' in JavaScript — From Basic to Advanced

// 1 Global Context
console.log("Global this:", this); 
// In browser → window
// In Node.js → {}

// 2 Inside a Function
function showThis() {
  console.log("Inside function:", this);
}
showThis(); // In strict mode → undefined, else → global object (window/global)

// 3 Inside an Object Method
const user = {
  name: "Ahushan",
  greet() {
    console.log(`Hello ${this.name}`); // 'this' refers to the object
  },
};
user.greet(); // Output: Hello Ahushan

// 4 'this' Lost in a Callback
const student = {
  name: "John",
  display() {
    setTimeout(function () {
      console.log("Callback this:", this); // undefined or global
    }, 1000);
  },
};
student.display();

// Fix using Arrow Function
const student2 = {
  name: "Jane",
  display() {
    setTimeout(() => {
      console.log("Arrow function this:", this.name); // Jane
    }, 1000);
  },
};
student2.display();

// 5 Constructor Function
function Person(name) {
  this.name = name;
}
const person1 = new Person("Ahushan");
const person2 = new Person("Mohamed");
console.log("Constructor this:", person1.name); // Ahushan
console.log("Constructor this:", person2.name); // Mohamed

// 6 Class with 'this'
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  show() {
    console.log("Brand:", this.brand);
  }
}
const c = new Car("Tesla");
c.show(); // Tesla

// 7 Manual 'this' binding → call(), apply(), bind()
const person = {
  name: "Mohamed",
};

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

sayHello.call(person, "Hi");     // Hi, Mohamed
sayHello.apply(person, ["Hello"]); // Hello, Mohamed

const boundHello = sayHello.bind(person, "Hey");
boundHello(); // Hey, Mohamed

// 8 Arrow Functions & 'this'
const obj = {
  value: 100,
  regularFn: function () {
    console.log("Regular:", this.value);
  },
  arrowFn: () => {
    console.log("Arrow:", this.value); // undefined (no own 'this')
  },
};
obj.regularFn(); // 100
obj.arrowFn(); // undefined

// 9 'this' in Event Listeners (Browser only)
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this); // refers to the button element
// });

// Real-world Example
const counter = {
  count: 0,
  increment() {
    console.log(++this.count);
  },
};
const inc = counter.increment;
inc(); // undefined (this lost)
const fixedInc = counter.increment.bind(counter);
fixedInc(); // 1

