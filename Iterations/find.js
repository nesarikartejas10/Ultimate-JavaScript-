const users = [
  { firstName: "Tejas", lastName: "Nesarikar", country: "India" },
  { firstName: "Donald", lastName: "Trumph", country: "USA" },
  { firstName: "Elon", lastName: "Musk", country: "Japan" },
  { firstName: "Bill", lastName: "Gates", country: "USA" },
];

const getUser = users.find((user) => {
  return user.country === "USA";
});

console.log(getUser);
