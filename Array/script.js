const actors = [
  { name: "Actor 1", payment: 100 },
  { name: "Actor 2", payment: 200 },
  { name: "Actor 3", payment: 150 },
];

//for loop
// for (let i = 0; i < actors.length; i++) {
//   actors[i].payment = actors[i].payment - 10;
// }

//forEach
// actors.forEach((actor, i, arr) => {
//   actor.payment = actor.payment - 10;
// });

//for-of
// for (let actor of actors) {
//   actor.payment = actor.payment - 10;
// }

// console.log(actors);

//filter()
const students = [
  { name: "student 1", mark: 45 },
  { name: "student 2", mark: 60 },
  { name: "student 3", mark: 35 },
  { name: "student 4", mark: 31 },
];

// const result = students.filter((student) => {
//   if (student.mark < 40) return true;
//   return false;
// });

//or
const result = students.filter((student) => student.mark < 40);
console.log(result);
