// SWITCH in JavaScript

let fruit = "apple";

// Basic usage
switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("Other fruit");
}

// Advanced: grouped cases
switch (fruit) {
  case "apple":
  case "mango":
  case "orange":
    console.log("This is a common fruit");
    break;
  default:
    console.log("Uncommon fruit");
}

// Advanced: switch with expressions
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
    case 2:
    dayName = "Tuesday";
    break;
    case 3:
    dayName = "Wednesday";
    break;
    case 4:
    dayName = "Thursday";
    break;
    case 5:
    dayName = "Friday";
    break;
    case 6:
    dayName = "Saturday";
    break;
    case 7:
    dayName = "Sunday";
    break;
    default:
    dayName = "Invalid day";
}
console.log(dayName);

// Note: Always include a 'break' statement to prevent fall-through, unless intentional.