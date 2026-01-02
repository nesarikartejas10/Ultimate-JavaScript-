console.log("Hello, I am test script...");

//When script tag is inside head
// const root = document.getElementById("root");
// console.log(root); //null
// root.innerText = "This is root"; //error

// When script tag is inside end of body tag
const root = document.getElementById("root");
console.log(root);
root.innerText = "This is root";
