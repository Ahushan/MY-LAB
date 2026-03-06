class Vehicle {
  constructor(name) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot create instance of abstract class directly");
    }
    this.name = name;
  }

  // Abstract method (must be overridden in child classes)
  startEngine() {
    throw new Error("startEngine() must be implemented in subclass");
  }
}

class Car extends Vehicle {
  startEngine() {
    return `${this.name} engine started with a key`;
  }
}

class Bike extends Vehicle {
  startEngine() {
    return `${this.name} engine started with a button`;
  }
}

const car = new Car("Tesla");
console.log(car.startEngine()); // Tesla engine started with a key

const bike = new Bike("Ducati");
console.log(bike.startEngine()); // Ducati engine started with a button
