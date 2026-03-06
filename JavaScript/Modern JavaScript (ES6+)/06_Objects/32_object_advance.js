// 32 Object Advance

// 1. Cloning objects
const original = { a: 1, b: 2 };
const shallowClone = { ...original };
console.log("Shallow Clone:", shallowClone);

// 2. Deep cloning (structuredClone - modern way)
const deepObject = { user: { name: "Alice" } };
const deepClone = structuredClone(deepObject);
deepClone.user.name = "Bob";
console.log("Original:", deepObject, "| Deep Clone:", deepClone);

// 3. Merging multiple objects
const obj1 = { a: 10 };
const obj2 = { b: 20 };
const obj3 = { c: 30 };
const merged = { ...obj1, ...obj2, ...obj3 };
console.log("Merged:", merged);

// 4. Computed Property Names
const key = "score";
const dynamicObj = { [key]: 100 };
console.log("Dynamic Object:", dynamicObj);

// 5. Optional Chaining & Nullish Coalescing
const user = { profile: { email: "user@example.com" } };
console.log("Email:", user?.profile?.email);
console.log("Phone:", user?.profile?.phone ?? "No phone available");

// 6. Immutability Pattern
const state = { count: 0 };
const newState = { ...state, count: state.count + 1 };
console.log("Old State:", state);
console.log("New State:", newState);
