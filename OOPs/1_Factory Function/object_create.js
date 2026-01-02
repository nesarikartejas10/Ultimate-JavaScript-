const userAction = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

function createUser(firstName, lastName) {
  let user = Object.create(userAction);
  user.firstName = firstName;
  user.lastName = lastName;
  return user;
}

let user1 = createUser("John", "Wick");
let user2 = createUser("James", "Bond");

console.log(user1.getFullName());
console.log(user2.getFullName());
