// 31 Object Destructuring

const person = {
  name: "John",
  age: 25,
  country: "USA",
  address: { city: "New York", zip: 10001 },
};

// 1. Basic Destructuring
const { name, age } = person;
console.log("Name:", name, "Age:", age);

// 2. Renaming variables
const { country: nation } = person;
console.log("Renamed:", person);

// 3. Default values
const { hobby = "Reading" } = person;
console.log("Default Hobby:", hobby);

// 4. Nested destructuring
const {
  address: { city, zip },
} = person;
console.log("City:", city, "ZIP:", zip);

// 5. Using Rest in destructuring
const { name: personName, ...otherDetails } = person;
console.log("Other Details:", otherDetails);
