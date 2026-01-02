const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2); //ignored
set.add(6);

console.log(set);

console.log(set.size); //3
console.log(set.has(2)); //true
console.log(set.has(5)); //false

set.delete(2);
console.log(set);

set.clear();
console.log(set);

const array = [1, 2, 3, 4, 3, 5, 2, 1];

const nums = new Set(array);

console.log(nums);

nums.forEach((num) => console.log(num));

for (let num of nums) {
  console.log(num);
}
