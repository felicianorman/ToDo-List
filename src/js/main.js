import { listObjects } from "./models/todo";

let getContainer = document.getElementById("container");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

let myList = [
  new listObjects("Köp Pepsi Max", false),
  new listObjects("Ät pasta", false),
  new listObjects("Ta ut hunden", false),
];

function existingList() {
  for (let i = 0; i < myList.length; i++) {

    //Skapar <li>
    let li = document.createElement("li");

    ul.appendChild(li);

    //Lägger p tag i <li>
    let pTag = document.createElement("p");
    li.appendChild(pTag);

    // Publicerar lista med objekt i min <li>
    pTag.innerHTML = myList[i].toDo;

    let clickedItem = myList[i];

    //Skapar <input>
    let inputBox = document.createElement("input");
    li.appendChild(inputBox);
    inputBox.classList.add("box");
    inputBox.setAttribute("type", "checkbox");

    inputBox.addEventListener("click", () => {
      handleClick(li, myList[i], inputBox, ul);
    });
  }
}

function handleClick(li, clickedItem, inputBox) {
  if (inputBox.checked === true) {
    clickedItem.done = true;

    let index = myList.indexOf(clickedItem);
    myList.splice(index, 1);

    console.log("Uppgiften avklarad");
    console.log(myList);

  }
  ul.innerHTML = " ";
  existingList();
}

existingList();

