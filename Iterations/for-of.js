//Array
const fruits = ["Apple", "Banana", "Orange", "Mango", "Peach"];

for (let fruit of fruits) {
  console.log(fruit);
}

//String
const user = "Tejas Nesarikar";

for (let ch of user) {
  if (ch === " ") {
    continue;
  } else {
    console.log(ch);
  }
}
