// Simulating interface with a base class
class Shape {
  // This acts like an interface method — must be implemented in subclasses
  area() {
    throw new Error("Method 'area()' must be implemented");
  }

  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Implementing the 'interface' methods
  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// Usage
const rect = new Rectangle(10, 5);
console.log("Area:", rect.area());           
console.log("Perimeter:", rect.perimeter()); 
