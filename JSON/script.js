const data = `{
  "name": "Tejas",
  "age": 29,
  "is_student": true,
  "passport": null,
  "pro_language": ["java", "javascript", "python"],
  "address": {
    "city": "Solapur",
    "state": "Maharashatra",
    "pincode": 413004
  }
}`;

//* JSON.parse() ==> convert json string into javascript object.
const dataObj = JSON.parse(data);
console.log(typeof dataObj); //object
console.log(dataObj.name); // Tejas
console.log(dataObj.pro_language[1]); //javascript
console.log(dataObj.address.pincode); //413004

const student = {
  name: "Tejas",
  age: 29,
  city: "Solapur",
};

//* JSON.stringify==> convert javascript object into json string.

const jsonData = JSON.stringify(student);
console.log(typeof jsonData); //string
console.log(jsonData); //{"name":"Tejas","age":29,"city":"Solapur"}
