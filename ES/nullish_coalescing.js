let name = null;
let user = name ?? "Guest";

console.log(user); // "Guest"

let age = 0;
console.log(age ?? 18); // 0  (keeps 0, because it’s NOT null/undefined)

// Difference: ?? vs ||

// The OR (||) operator treats falsy values (0, "", false, NaN, null, undefined) as "falsey".
// The Nullish (??) operator only checks for null or undefined.

let count = 0;

console.log(count || 10); // 10  (because 0 is falsy)
console.log(count ?? 10); // 0   (because 0 is NOT null/undefined)
