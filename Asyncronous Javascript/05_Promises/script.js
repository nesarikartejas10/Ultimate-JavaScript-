const bucket = ["chips", "coffee", "vegetables", "rice", "salt"];

//Create promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Ready to eat fried rice...");
  } else {
    reject("Couldn't eat fried rice");
  }
});

//Consume promise
//first way
// friedRicePromise.then(
//   //if promise get resolve
//   (result) => {
//     console.log(result); //Ready to eat fried rice...
//   },
//   //if promise get reject
//   (error) => {
//     console.log(error); //Couldn't eat fried rice
//   }
// );

//Second Way
friedRicePromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
