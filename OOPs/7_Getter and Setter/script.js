const john = {
  username: "John Smith",
  password: "john@123",
  birthYear: "1995",

  get getName() {
    return this.username;
  },

  set setPassword(val) {
    if (val.length >= 5) {
      this.password = val;
    } else {
      alert("password should be atleast 5 characters!...");
    }
  },
};

console.log(john.getName);
john.setPassword = "john@abc";
console.log(john.password);
