// ARRAY CONVERSIONS & UTILITY METHODS

const numbers = [1, 2, 3, 4, 5];

// 1. join - convert array to string
console.log("Joined with , :", numbers.join(","));
console.log("Joined with - :", numbers.join("-"));

// 2. toString - convert array to string
console.log("toString:", numbers.toString());

// 3. Array.from - create array from iterable or array-like object
const str = "hello";
const arrFromStr = Array.from(str);
console.log("Array from string:", arrFromStr);

// 4. Array.of - create array from arguments
const arrOf = Array.of(10, 20, 30);
console.log("Array.of:", arrOf);

// 5. copyWithin - shallow copy within the same array
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // copy from index 3 to start
console.log("After copyWithin:", arr);

// 6. fill - fill array with static value
let fillArr = [1, 2, 3, 4, 5];
fillArr.fill(0, 1, 4); // fill value 0 from index 1 to 3
console.log("After fill:", fillArr);

// --- Advanced Usage ---

// Convert NodeList to Array
const divs = document.querySelectorAll("div"); // NodeList
const divArray = Array.from(divs);
console.log("Divs Array:", divArray);

// Using map with Array.from
const squares = Array.from([1, 2, 3, 4], (x) => x ** 2);
console.log("Squares using Array.from:", squares);
