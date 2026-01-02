let user1 = {
  name: "Tejas",
  age: 30,
};

const user2 = {
  name: "Soham",
  age: 28,
};

const ws = new WeakSet();
ws.add(user1);
ws.add(user2);

console.log(ws.has(user1));
user1 = null;
console.log(ws.has(user1));
