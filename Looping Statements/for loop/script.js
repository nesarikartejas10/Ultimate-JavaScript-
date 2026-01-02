//print number 0 to 10
console.log("Program Started");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("Program Ended");

//Print value of an array
const friends = ["Tejas", "Soham", "Chinmay", "Shubham", "Vicky"];
for (let i = 0; i <= friends.length; i++) {
  console.log(`${i + 1}.${friends[i]}`);
}

//Print even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
