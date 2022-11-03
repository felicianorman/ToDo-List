import { listObjects } from "./models/todo";

let getContainer = document.getElementById("container");
let newContainer = document.getElementById("finished");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

let regretBtn = document.getElementById("regret");

let newUl = document.createElement("ul");
newContainer.appendChild(newUl);

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

    let inputBox = document.createElement("input");
    li.appendChild(inputBox);
    inputBox.classList.add("box");
    inputBox.setAttribute("type", "checkbox");

      inputBox.addEventListener("click", () => {
        handleClick(myList[i], inputBox);
      });
    };
  }

  //Skapar <input>
  //   let inputBox = document.createElement("input");
  //   li.appendChild(inputBox);
  //   inputBox.classList.add("box");
  //   inputBox.setAttribute("type", "checkbox");

  //   inputBox.addEventListener("click", () => {
  //     handleClick(myList[i], inputBox);
  //   });
  // }


//Ny lista där avklarade objekt läggs till i
let finishedList = [];

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

  //Flyttar de avklarade objekten till ny lista
  if ((clickedItem.done = true)) {
    let li = document.createElement("li");
    newUl.appendChild(li);

    let undoButton = document.getElementById("remove");

    //Pushar de klara uppgifterna till nya listan
    finishedList.push(clickedItem.toDo);

    li.innerHTML = finishedList;

    //Ser till att det inte blir dubblering i HTML från listan
    finishedList.pop();

    regretBtn.addEventListener("click", () => {
      console.log("Du ångrade dig!");
      myList.push(finishedList);

      li.innerHTML = clickedItem.toDo;
      console.log(clickedItem.toDo);
      ul.appendChild(li);
    });
  }
  newToDo(inputBox);
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
