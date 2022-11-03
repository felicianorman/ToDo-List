import { listObjects } from "./models/todo";

let getContainer = document.getElementById("container");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

//Skapar klass för objekt
// class listObjects {
//   constructor(toDo, done) {
//     this.toDo = toDo;
//     this.done = done;
//   }
// }

//Ger egenskaper till objekt och lägger i lista
let myList = [
  new listObjects("Köp Pepsi Max", false),
  new listObjects("Ät pasta", false),
  new listObjects("Ta ut hunden", false),
];

function existingList() {
  for (let i = 0; i < myList.length; i++) {
    //Skapar <li>
    let li = document.createElement("li");

    //Tömma ul innan
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
    console.log(true);

    let index = myList.indexOf(clickedItem);
    myList.splice(index, 1);

    console.log("Borttagen " + index);
    console.log(myList);

    // finishedItems()
  }
  ul.innerHTML = " ";
  existingList();
}

existingList();
