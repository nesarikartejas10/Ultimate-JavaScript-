const promise = new Promise((resolve, reject) => {
  console.log("start");
  const isTrue = false;
  if (isTrue) {
    resolve("Promise Success");
  } else {
    reject("error in promise");
  }
  console.log("end");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally always executed");
  });
