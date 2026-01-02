//DOM Manipulation

//1. getElementById()
// const heading = document.getElementById("heading");
// console.log(heading);

//2. getElementsByTagName
// const headTags = document.getElementsByTagName("h1");
// console.log(...headTags);

// 3. getElementsByClassName()
// const paras = document.getElementsByClassName("para");
// console.log(...paras);

//4. querySelector()
// const listItem = document.querySelector("ul li");
// console.log(listItem);

//5. querySelectorAll()
// const listItems = document.querySelectorAll("ul li");
// console.log(listItems);

//Traverse DOM

// 1.parentNode
// const heading = document.querySelector(".head");
// const parentElem = heading.parentNode;
// console.log(parentElem);

//2.children
// const ul = document.querySelector("ul");
// const childrens = ul.children;
// console.log(childrens);

//3. nextElementSibling
// const heading = document.querySelector(".head");
// console.log(heading.nextElementSibling);

//4. previousElementSibling
// const h3 = document.querySelector("h3");
// console.log(h3.previousElementSibling);

//Manipulation
// const heading = document.querySelector("#heading");
// heading.innerHTML = "Web Dev is awesome!";
// heading.style.color = "red";
// heading.style.fontFamily = "Arial";

// heading.classList.add("title", "hello");
// heading.classList.remove("title");

//Create Elements
// const container = document.querySelector(".container");

// const h2 = document.createElement("h2");
// h2.innerHTML = "Welcome To DOM Manipulation";

// container.appendChild(h2);

// const h3 = document.createElement("h3");
// h3.innerText = "This is h3 element";

//insertadjacentElemnt(position, element)
// h2.insertAdjacentElement("beforebegin", h3);
// h2.insertAdjacentElement("afterend", h3);
// h2.insertAdjacentElement("afterbegin", h3);

//Dom Events
// const title = document.querySelector("#title");
// const button = document.querySelector("#button");

// button.addEventListener("click", (event) => {
//   title.style.color = "purple";
//   title.style.fontStyle = "italic";
// });

//Mini Project- Bulb on/off
const bulb = document.querySelector(".bulb");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (bulb.src.includes("off")) {
    bulb.src = "./images/bulb-on.gif";
    btn.innerHTML = "Turn Off";
  } else {
    bulb.src = "./images/bulb-off.gif";
    btn.innerHTML = "Turn On";
  }
});
