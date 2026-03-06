// 29 Object Methods

const car = {
  brand: "Tesla",
  model: "Model 3",
  price: 45000,
};

// 1. Object.keys() - returns array of keys
console.log("Keys:", Object.keys(car));

// 2. Object.values() - returns array of values
console.log("Values:", Object.values(car));

// 3. Object.entries() - returns array of key-value pairs
console.log("Entries:", Object.entries(car));

// 4. Object.assign() - clone or merge objects
const carDetails = { color: "Red", year: 2024 };
const mergedCar = Object.assign({}, car, carDetails);
console.log("Merged Car:", mergedCar);

// 5. Object.freeze() - make object immutable
Object.freeze(car);
car.brand = "Ford"; // won’t change
console.log("After Freeze:", car);

// 6. Object.seal() - modify allowed, add/delete not allowed
const user = { name: "Bob", age: 30 };
Object.seal(user);
user.age = 31; // works
delete user.name; // fails
console.log("After Seal:", user);
