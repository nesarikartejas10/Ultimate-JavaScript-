//Set cookies
document.cookie = "item = milk";
document.cookie = "loc=india; expires=Wed, 2 October 2024 12:00:00 UTC";

//get cookies
const x = document.cookie;
console.log(x);

//delete cookie (to delete the cookie set exipres date in past)
// document.cookie =
//   "myCookie=tejas123; expires=Mon, 30 September 2024 12:00:00 UTC";

// OR (we can set max-age=0)
// document.cookie = "item=; max-age=0; path=/";
