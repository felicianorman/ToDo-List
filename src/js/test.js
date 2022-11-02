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

  deleteBtn.addEventListener("click", () => {
    console.log("Klickad");

    // console.log(myList[i]);
    let deleteArray = myList.splice(i, 1);
    console.log(deleteArray);

    if(deleteArray = true) {
      li.remove();
    }
  });

  // Publicerar lista med objekt i min <li>
  pTag.innerHTML = myList[i].toDo;

  //Skapar <input>
  let inputBox = document.createElement("input");
  li.appendChild(inputBox);
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
