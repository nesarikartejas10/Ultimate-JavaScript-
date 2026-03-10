const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise fulfilled!");
  } else {
    reject("Promise rejected!");
  }
});

// Using the promise
myPromise
  .then((result) => console.log(result)) // "Promise fulfilled!"
  .catch((error) => console.log(error));

//2.example
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John Doe", email: "john@example.com" });
      } else {
        reject("Invalid user ID");
      }
    }, 2000); // Simulating API delay
  });
}

// Using it
getUserData(5)
  .then((user) => {
    console.log("User found:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
