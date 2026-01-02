function addEvent() {
  console.log("first way to add event listener, clicked");
}

function doubleClick() {
  console.log("sceond way to add event listener, double clicked");
}

const secondPara = document.querySelector(".second-para");
secondPara.ondblclick = doubleClick;

const thirdPara = document.querySelector(".third-para");
thirdPara.addEventListener("click", () => {
  console.log("third way to add event listener");
});

//Add cards

const container = document.querySelector(".container");
const addCard = document.querySelector(".addCard");

let count = 1;
function addCardFun() {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.innerText = count++;

  container.appendChild(newCard);
}

addCard.addEventListener("click", addCardFun);
