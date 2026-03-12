// 28 Object Basics

// 1. Object Creation
let person = {
  name: "John",
  age: 25,
  isStudent: false,
};
console.log("Person Object:", person);

// 2. Accessing Properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// 3. Modifying Properties
person.age = 26;
person["isStudent"] = true;
console.log("Modified Person:", person);

// 4. Adding New Property
person.city = "New York";
console.log("After Adding Property:", person);

// 5. Deleting Property
delete person.isStudent;
console.log("After Deletion:", person);

// 6. Nested Objects
let student = {
  name: "Alice",
  marks: { math: 90, science: 85 },
};
console.log("Science Marks:", student.marks.science);
