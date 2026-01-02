let user = { id: 1 };
const weakMap = new WeakMap();

weakMap.set(user, "Active");
console.log(weakMap.get(user)); // Active
