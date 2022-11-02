let getContainer = document.getElementById("container");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

//Skapar klass för objekt
class listObjects {
  constructor(toDo, done) {
    this.toDo = toDo;
    this.done = done;
  }
}

//Ger egenskaper till objekt och lägger i lista
let myList = [
  new listObjects("Köp Pepsi Max", false),
  new listObjects("Ät pasta", false),
  new listObjects("Ta ut hunden", false),
];

for (let i = 0; i < myList.length; i++) {
  //Skapar <li>
  let li = document.createElement("li");
  ul.appendChild(li);

  let pTag = document.createElement("p");
  li.appendChild(pTag);

  //Skapar knapp
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";

  let buttonFunction = deleteBtn.addEventListener("click", () => {
    console.log("Klickad");

    //Tar bort värdet från listan med splice
    let deleteArray = myList.splice(i, 1);
    console.log(deleteArray);

    // if ((deleteArray = true)) {
    //   li.remove();
    // }
  });

  // Publicerar lista med objekt i min <li>
  pTag.innerHTML = myList[i].toDo;

  //Skapar <input>
  let inputBox = document.createElement("input");
  li.appendChild(inputBox);
  inputBox.classList.add("box");
  inputBox.setAttribute("type", "checkbox");

  //Skapar händelse
  inputBox.addEventListener("click", () => {
    if (inputBox.checked === true) {
      myList[i].done = true;
      pTag.innerHTML = "Uppgift avklarad";
      li.appendChild(deleteBtn);
    } else {
      myList[i].done = false;
      pTag.innerHTML = myList[i].toDo;
      deleteBtn.remove();
    }
  });
}

let sendValue = document.getElementById("inputButton");
let typeInput = document.getElementById("inputField");

sendValue.addEventListener("click", newToDo);

let addToList = [];

function newToDo() {
  addToList.push(typeInput.value);
  console.log(addToList);

  let newLi = document.createElement("li");
    ul.appendChild(newLi);

    newLi.innerHTML += addToList;
    addToList.pop();

    let inputBox = document.createElement("input");
    newLi.appendChild(inputBox);

    // inputBox.classList.add("box");
    inputBox.style.width = "40px";
    inputBox.setAttribute("type", "checkbox");

  clearInput();
}

function clearInput() {
  typeInput.value = " ";
}
