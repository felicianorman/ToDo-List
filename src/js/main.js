import { listObjects } from "./models/todo";

//HTML
let getContainer = document.getElementById("container");
let newContainer = document.getElementById("finished");
let ul = document.createElement("ul");
getContainer.appendChild(ul);
let newUl = document.createElement("ul");
newContainer.appendChild(newUl);

let myList = [
  new listObjects("Köp Pepsi Max", false),
  new listObjects("Ät pasta", false),
  new listObjects("Ta ut hunden", false),
];

//Funktion för min hårdkodade lista
function existingList() {
  for (let i = 0; i < myList.length; i++) {
    let li = document.createElement("li");

    ul.appendChild(li);

    let pTag = document.createElement("p");
    li.appendChild(pTag);

    //Publicerar listan i <p>
    if (myList[i].done === false) {
      pTag.innerHTML = myList[i].toDo;
    }

    //Skapar input som kan checkas i
    let inputBox = document.createElement("input");
    li.appendChild(inputBox);
    inputBox.classList.add("box");
    inputBox.setAttribute("type", "checkbox");

    inputBox.addEventListener("click", () => {
      handleClick(myList[i], inputBox);
    });
  }
}

//När man kryssar i input körs denna funktion
function handleClick(clickedItem, inputBox) {
  if (inputBox.checked === true) {
    clickedItem.done = true;

    //Tar bort den markerade uppgiften från arrayen
    let index = myList.indexOf(clickedItem);
    myList.splice(index, 1);

    console.log("Uppgiften avklarad");
    console.log(myList);
  }

  ul.innerHTML = " ";
  existingList();

  let newLi = document.createElement("li");
  newUl.appendChild(newLi);

  newLi.appendChild(inputBox);

  //Efter användaren kryssat i inputboxen hamnar de avklarade to do objekten här
  //Dyker upp i li-tag så checkboxen inte kommer med
  if (clickedItem.done === true) {
    newLi.innerHTML = clickedItem.toDo;
  }
}


//Försökte börja på en funktion som låter användaren skriva in egna input värden
//Fungerar men är inte kopplad till eventlistener för inputboxen
let inputValue = document.getElementById("inputNewValue");
let sendValue = document.getElementById("buttonNewValue");

function newToDo(inputBox) {
  sendValue.addEventListener("click", () => {
    let li = document.createElement("li");
    ul.appendChild(li);

    let pTag = document.createElement("p");
    li.appendChild(pTag);

    pTag.innerHTML = inputValue.value;

    let inputBox = document.createElement("input");
    li.appendChild(inputBox);
    inputBox.classList.add("box");
    inputBox.setAttribute("type", "checkbox");

    console.log(inputValue.value);
  });
}

newToDo();
existingList();
