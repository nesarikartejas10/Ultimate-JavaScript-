//Callback Hell

// function loadDashBoard(id, callback) {
//   let error;
//   setTimeout(() => {
//     if (error) {
//       return callback(error);
//     }
//     console.log("fetching user data...");

//     setTimeout(() => {
//       if (error) {
//         return callback(error);
//       }
//       console.log("fetching user friend list...");

//       setTimeout(() => {
//         error = "user post error"; //explicitly add error
//         if (error) {
//           return callback(error);
//         }
//         console.log("fetching user posts...");

//         setTimeout(() => {
//           if (error) {
//             return callback(error);
//           }
//           console.log("fetching user comments...");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// function errorHandle(error) {
//   console.log("error has occured...");
// }

// loadDashBoard("101", errorHandle);

// Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Done");
    // resolve("Promise is resolve");
    reject("Promise is reject");
  }, 3000);
});

p1.then((data) => {
  console.log("From then: ", data);
})
  .catch((error) => {
    console.log("error occured: ", error);
  })
  .finally(() => {
    console.log("finally executed");
  });
