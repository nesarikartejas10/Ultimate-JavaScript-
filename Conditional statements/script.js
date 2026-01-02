//if statement
let speed = 87;
if (speed > 90) {
  console.log("Overspeeding");
}
if (speed > 50 && speed <= 90) {
  console.log("Normal");
}
if (speed <= 50) {
  console.log("slow");
}

//if-else statement
let myAge = 15;
if (myAge >= 18) {
  console.log("I can drive");
} else {
  console.log("I can not drive");
}

//if-else-if statement
const weight = 92;
if (weight > 72) {
  console.log("Over weight");
} else if (weight > 50 && weight <= 70) {
  console.log("You are ");
} else {
}

//nested if-else statement
let age = 10;
if (age > 0) {
  if (age >= 18) {
    console.log("You are eligible for vote");
  } else {
    console.log("You are not eligible for vote");
  }
} else {
  console.log("Enter valid age");
}

//switch case statement
let weekNumber = 3;
switch (weekNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Please enter valid week number");
}
