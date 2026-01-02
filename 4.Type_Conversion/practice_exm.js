// Practice Examples

console.log(Boolean(0)); // false
console.log(Boolean(" ")); // true
console.log(!!"Hello"); // true
console.log(!![]); // true

console.log(0 || "JavaScript"); // JavaScript
console.log("JavaScript" || 0); // JavaScript
console.log(null && "JS"); // null
console.log("js" && null); // null

console.log("" || (50 > 10 && !false) || -0); //first priority to slve && =>true

console.log("JS" && "React"); // React
console.log("" || 42); // 42
console.log(!"false"); // false

console.log(5 == "5"); // 5==5 => true
console.log(5 === "5"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(undefined == 0); // when we compare with undefined it always return false except null

console.log("2" > 1); // 2>1 =>true

console.log(0 && "truthy"); // 0
console.log("truthy" || false); // "truthy"
console.log([] == false); //first convert non-primitive to primitive=> [] means '' => ''==false => 0==0 => true
console.log({} == true); // first convert non-primitive to primitive {} means '[object Object]' => NaN==true => false
console.log(NaN == false); //false =>when we compare with NaN it always return false
