class Animal {
  speak() {
    return "generic";
  }
}

class Dog extends Animal {
  speak() {
    return "bark";
  }

  fetch() {
    return "fetched";
  }
}

// Upcasting example: Dog instance referenced as Animal
const dog = new Dog();
const asAnimal = /** as Animal **/ dog; // conceptually upcasted (no change in JS)
console.log(asAnimal.speak()); // bark (method from Dog due to prototype)

// Downcasting example: ensure type before using subclass-only methods
const maybeAnimal = new Animal();

function tryFetch(obj) {
  // safe downcast: check instanceof before calling subclass method
  if (obj instanceof Dog) {
    return obj.fetch();
  } else {
    return "not a Dog";
  }
}

console.log(tryFetch(dog));         // fetched
console.log(tryFetch(maybeAnimal)); // not a Dog

// Another pattern: duck-typing check
function tryFetchDuck(obj) {
  if (typeof obj.fetch === "function") {
    return obj.fetch();
  }
  return "no fetch method";
}
console.log(tryFetchDuck(dog)); // fetched
