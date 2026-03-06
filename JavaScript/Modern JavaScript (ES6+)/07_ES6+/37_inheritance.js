// 37 Inheritance

// Inheritance allows one class to extend another,
// reusing and enhancing existing functionality.


// 1 Basic Inheritance using `extends`

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Inherited method
dog.bark(); // Own method



// 2 Using `super()` in Constructor

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} engine started.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // calls parent constructor
    this.model = model;
  }

  info() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

const car1 = new Car("Tesla", "Model 3");
car1.start();
car1.info();



// 3 Overriding Parent Methods

class Bird {
  fly() {
    console.log("The bird is flying ");
  }
}

class Parrot extends Bird {
  fly() {
    console.log("The parrot flies while talking ");
  }
}

const parrot = new Parrot();
parrot.fly(); // overridden method



// 4 Calling Parent Method using `super.method()`

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    console.log(`${this.name} works as a ${this.position}`);
  }
}

class Manager extends Employee {
  describe() {
    super.describe(); // Call parent method
    console.log(`${this.name} manages a team.`);
  }
}

const manager = new Manager("Ahushan", "Software Engineer");
manager.describe();



// 5 Multi-level Inheritance

class LivingThing {
  constructor(name) {
    this.name = name;
  }
}

class Mammal extends LivingThing {
  hasHair() {
    return true;
  }
}

class Human extends Mammal {
  speak() {
    console.log(`${this.name} can speak.`);
  }
}

const human = new Human("Ahushan");
console.log(human.hasHair()); // true
human.speak();



// 6 Static Inheritance

class MathOps {
  static add(a, b) {
    return a + b;
  }
}

class AdvancedMath extends MathOps {
  static multiply(a, b) {
    return a * b;
  }
}

console.log("Add:", AdvancedMath.add(5, 10)); // Inherited static method
console.log("Multiply:", AdvancedMath.multiply(3, 4));



// 7 Inheritance with Private Fields (#)

class Account {
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${this.owner} deposited ₹${amount}`);
  }

  #calculateInterest() {
    return this.#balance * 0.05;
  }

  getInterest() {
    return this.#calculateInterest();
  }
}

class SavingsAccount extends Account {
  addBonus() {
    console.log(`${this.owner} received a ₹500 bonus.`);
  }
}

const acc1 = new SavingsAccount("Ahushan");
acc1.deposit(2000);
console.log("Interest:", acc1.getInterest().toFixed(2));
acc1.addBonus();



// 8 Real-world Example: User Roles

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

class Moderator extends User {
  constructor(username) {
    super(username, "Moderator");
  }

  muteUser(user) {
    console.log(`${this.username} muted ${user.username}`);
  }
}

const user1 = new User("John", "Member");
const admin = new Admin("Ahushan");
const mod = new Moderator("Kumar");

user1.login();
admin.login();
mod.login();

admin.deleteUser(user1);
mod.muteUser(user1);

