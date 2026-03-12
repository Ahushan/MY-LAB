/*
Types of Polymorphism:
1. Compile-time (Method Overloading) → Not directly supported in JS, but can be mimicked.
2. Run-time (Method Overriding) → Achieved using inheritance.
*/

// Method Overriding
class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog barks";
  }
}

class Cat extends Animal {
  speak() {
    return "Cat meows";
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(a => console.log(a.speak()));
/*
Output:
Animal makes a sound
Dog barks
Cat meows
*/

/*
💡Method Overloading: Same method name → different behavior
*/
function print(value) {
  console.log(`Value: ${value}`);
}
print(10);       // number
print("Hello");  // string
print({ x: 1 }); // object


