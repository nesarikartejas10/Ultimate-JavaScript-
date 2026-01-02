// create multiple user object using factory function
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}

const person1 = createPerson("John", "Wick");
const person2 = createPerson("James", "Bond");

console.log(person1.getFullName());
console.log(person2.getFullName());

console.log(person1.getFullName === person2.getFullName); //false

//In above example problem is that each person object has a copy of the same getFullName() method. It’s not efficient memory management. so to avoid this we are using Object.create()
