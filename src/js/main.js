import { listObjects } from "./models/todo";

let getContainer = document.getElementById("container");
let newContainer = document.getElementById("finished");

//Ul för lista som inte är klar
let ul = document.createElement("ul");
getContainer.appendChild(ul);

//Ul för lista som är klar
let newUl = document.createElement("ul");
newContainer.appendChild(newUl);

let regretBtn = document.getElementById("regret");

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

    if(myList[i].done === false) {
      pTag.innerHTML = myList[i].toDo;
    }

    let inputBox = document.createElement("input");
    li.appendChild(inputBox);
    inputBox.classList.add("box");
    inputBox.setAttribute("type", "checkbox");

      inputBox.addEventListener("click", () => {
        handleClick(myList[i], inputBox, pTag);
      });
    };
  }

//Ny lista där avklarade objekt läggs till i
let finishedList = [];

//När man kryssar i input körs denna funktion
function handleClick(clickedItem, inputBox, pTag) {
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

  //Efter användaren kryssat i inputboxen hamnar de avklarade to do objekten här
  let newLi = document.createElement("li");
  newUl.appendChild(newLi);

  let newPTag = document.createElement("p");
  newLi.appendChild(newPTag);

  newLi.appendChild(inputBox);

  if(clickedItem.done === true) {
    newPTag.innerHTML = clickedItem.toDo;

   
  }

  
}

let inputValue = document.getElementById("inputNewValue");
let sendValue = document.getElementById("buttonNewValue");

function newToDo(inputBox) {
  sendValue.addEventListener("click", () => {
    let newToDoLi = document.createElement("li");
    ul.appendChild(newToDoLi);

    newToDoLi.innerHTML = inputValue.value;

    let inputBox = document.createElement("input");
    newToDoLi.appendChild(inputBox);
    inputBox.classList.add("box");
    inputBox.setAttribute("type", "checkbox");

    console.log(inputValue.value);
  });
}

newToDo();
existingList();
