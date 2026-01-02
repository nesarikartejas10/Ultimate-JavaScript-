async function getData() {
  try {
    const url = "https://jsonplaceholder.typcode.com/todos/1";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.dir(error);
    console.log(error.name, error.message);
  } finally {
    console.log("Close Database connection....");
  }
}

//getData();

//Error Propogation
function validateUserAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number");
  }
  console.log("User age is valid");
}

function userData() {
  try {
    validateUserAge(15);
    validateUserAge("invalid");
    validateUserAge(45);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}
