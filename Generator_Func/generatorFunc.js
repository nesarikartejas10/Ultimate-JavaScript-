function* count() {
  yield 1;
  yield 2;
  yield 3;
}

const c = count();

console.log(c);
console.log(c.next().value); //1
console.log(c.next().value); //2
console.log(c.next().value); //3
console.log(c.next().value); //undefined

function* generateIds() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const ids = generateIds();

console.log(ids.next().value); //1
console.log(ids.next().value); //2
console.log(ids.next().value); //3
