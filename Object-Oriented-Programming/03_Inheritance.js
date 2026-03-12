// 🔹 Parent Class
class Vehicle {
  // Public property
  brand;

  // "Protected" property (naming convention)
  _fuel = 100;

  // Private property
  #engineNumber = 12345;

  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} is starting`);
  }

  getEngineNumber() {
    return this.#engineNumber;
  }

  showFuel() {
    console.log(`${this.brand} fuel level: ${this._fuel}`);
  }
}

// 🔹 Single Inheritance
class Car extends Vehicle {
  model;

  constructor(brand, model) {
    super(brand); // call parent constructor
    this.model = model;
  }

  display() {
    console.log(`${this.brand} - ${this.model}`);
  }

  useFuel(amount) {
    this._fuel -= amount; // access "protected" property
  }
}

// 🔹 Multilevel Inheritance
class ElectricCar extends Car {
  battery;

  constructor(brand, model, battery) {
    super(brand, model);
    this.battery = battery;
  }

  showBattery() {
    console.log(`${this.brand} ${this.model} battery: ${this.battery}%`);
  }

  // Override parent method
  start() {
    super.start(); // call Vehicle.start()
    console.log(`${this.brand} ${this.model} is ready to drive!`);
  }
}

// 🔹 Hierarchical Inheritance
class Bike extends Vehicle {
  wheels() {
    console.log("Bike has 2 wheels");
  }
}

// 🔹 Testing Inheritance

// Single Inheritance
const car1 = new Car("Toyota", "Corolla");
car1.start();       // Toyota is starting
car1.display();     // Toyota - Corolla
car1.useFuel(10);
car1.showFuel();    // Toyota fuel level: 90

// Multilevel Inheritance
const tesla = new ElectricCar("Tesla", "Model X", 90);
tesla.start();      // Tesla is starting → Tesla Model X is ready to drive!
tesla.showBattery();// Tesla Model X battery: 90
tesla.useFuel(20);
tesla.showFuel();   // Tesla fuel level: 80
console.log("Engine #:", tesla.getEngineNumber()); // 12345 (private field via getter)

// Hierarchical Inheritance
const bike1 = new Bike("Yamaha");
bike1.start();      // Yamaha is starting
bike1.wheels();     // Bike has 2 wheels
bike1.showFuel();   // Yamaha fuel level: 100
