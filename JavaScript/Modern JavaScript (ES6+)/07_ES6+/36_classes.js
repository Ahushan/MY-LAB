// 36 Classes

// Classes provide a cleaner, more structured syntax
// for creating objects and handling inheritance.


// 1 Basic Class Definition

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`👋 Hello, my name is ${this.name} and I’m ${this.age} years old.`);
  }
}

const person1 = new Person("Ahushan", 21);
person1.greet();


// 2 Adding Methods

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting... 🚗`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} has stopped.`);
  }
}

const car1 = new Car("Tesla", "Model S");
car1.start();
car1.stop();


// 3 Class Inheritance (extends & super)

class ElectricCar extends Car {
  constructor(brand, model, battery) {
    super(brand, model); // call parent constructor
    this.battery = battery;
  }

  charge() {
    console.log(`${this.brand} ${this.model} is charging ⚡`);
  }

  start() {
    super.start(); // reuse parent method
    console.log(`Battery level: ${this.battery}%`);
  }
}

const ev1 = new ElectricCar("Tesla", "Model 3", 90);
ev1.start();
ev1.charge();


// 4 Getters and Setters

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 20);
console.log("Area:", rect.area); // 200
rect.dimensions = { width: 5, height: 15 };
console.log("Updated Area:", rect.area);


// 5 Static Methods & Properties

class MathUtils {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log("Add:", MathUtils.add(10, 20));
console.log("Circle Area:", MathUtils.circleArea(5));


// 6 Private Fields & Methods (Modern JS)

// (#name) → Private property, accessible only inside the class

class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${this.owner} deposited ₹${amount}.`);
  }

  #calculateInterest() {
    return this.#balance * 0.05;
  }

  showBalance() {
    console.log(`${this.owner}'s balance: ₹${this.#balance}`);
    console.log(`Interest (private): ₹${this.#calculateInterest().toFixed(2)}`);
  }
}

const acc1 = new BankAccount("Ahushan");
acc1.deposit(1000);
acc1.showBalance();
// acc1.#balance Error: Private field



// 7 Class Expressions (Advanced)

const Animal = class {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`${this.type} makes a sound.`);
  }
};

const dog = new Animal("Dog");
dog.speak();



// 8 Real-world Example (User System)

class User {
  constructor(username, role) {
    this.username = username;
    this.role = role;
  }

  login() {
    console.log(`${this.username} logged in as ${this.role}`);
  }
}

class Admin extends User {
  constructor(username) {
    super(username, "Admin");
  }

  deleteUser(user) {
    console.log(`${this.username} deleted ${user.username}`);
  }
}

const user1 = new User("John", "User");
const admin = new Admin("Ahushan");

user1.login();
admin.login();
admin.deleteUser(user1);
