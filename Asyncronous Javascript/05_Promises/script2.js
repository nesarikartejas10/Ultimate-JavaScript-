const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("First"), 2000)
);

const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 5000)
);

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Failed"), 1000)
// );

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000)
);

Promise.all([promise1, promise3, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.race([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.any([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
