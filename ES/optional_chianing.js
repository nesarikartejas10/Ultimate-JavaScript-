// The Problem Without Optional Chaining
const user = {
  name: "Tejas",
  address: { city: "Pune" },
};

console.log(user.address.city); // "Pune"
console.log(user.contact.phone); // ❌ Error: Cannot read properties of undefined

// Solution: Optional Chaining
console.log(user?.address?.city); // "Pune"
console.log(user?.contact?.phone); // undefined (no error)

// Optional Chaining with Functions
const person = {
  greet() {
    return "Hello!";
  },
};

console.log(person.greet?.()); // "Hello!"
console.log(person.sayHi?.()); // undefined (no error)

// Optional Chaining with Arrays
const users = [{ name: "Tejas" }, null, { name: "Amit" }];

console.log(users[0]?.name); // "Tejas"
console.log(users[1]?.name); // undefined (no error)
