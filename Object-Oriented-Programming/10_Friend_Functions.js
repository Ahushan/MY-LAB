//  Creating friend function using closure
class Person {
  #name; // private field

  constructor(name) {
    this.#name = name;
  }

  // A method to allow friend-like access
  getName() {
    return this.#name;
  }
}

// Friend-like function (can access through a public method)
function displayPersonName(person) {
  console.log("Name:", person.getName());
}

const p1 = new Person("Ahushan");
displayPersonName(p1); // Name: Ahushan
