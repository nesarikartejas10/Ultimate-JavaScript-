// Type Conversion (Type Casting)

// 1) Explicit Conversion => Manually conversion of one data type into another by using in built method or constructor function
// 2) Implicit Conversion (Type Coercion) => Automatically conversion of one type into another by javascript.

// 1) Explicit Conversion

// To String

// let a = 12;
// console.log(typeof String(a)); // String()

// let z = true;
// console.log(typeof z.toString()); // .toString()

// To Number

// let a = "200";
// console.log(typeof Number(a)); // Number()

// let b = "12.99";
// console.log(typeof parseInt(b), parseInt(b));

// let b = "12.99";
// console.log(typeof parseFloat(b), parseFloat(b));

// let a = +"12";
// console.log(typeof a, a);

// To Boolean

// let check = -90;
// console.log(Boolean(check)); // Boolean()

// 2) Implicit Conversion (Type Coercion)
console.log("3" + 2); //"3"+"2" =>32
console.log("23" > 10); //23>10 =>true
console.log("hi" < 20); //NaN<10 =>false
console.log(true == 1); //1==1 =>true
console.log("" == 1); //0==1 =>false
