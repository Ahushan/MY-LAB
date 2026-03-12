class Student {
  constructor(name, age) {
    // assigning values to object properties
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating objects
const student1 = new Student("Ahushan", 21);
const student2 = new Student("Rahul", 22);

// Calling method
student1.display();
student2.display();
