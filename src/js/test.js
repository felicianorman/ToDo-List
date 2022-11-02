let getContainer = document.getElementById("container");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

//Skapar klass för objekt
class listObjects {
  constructor(toDo) {
    this.toDo = toDo;
  }
}

//Ger egenskaper till objekt och lägger i lista
let myList = [new listObjects("Köp Pepsi Max"), new listObjects("Ät pasta"), new listObjects("Ta ut hunden")];

for (let i = 0; i < myList.length; i++) {
  //Skapar <li>
  let li = document.createElement("li");
  ul.appendChild(li);

  // Publicerar lista med objekt i min <li>
  console.log(myList[i].toDo);
  li.innerHTML = myList[i].toDo;

  //Skapar <input>
  let inputBox = document.createElement("input");
  li.appendChild(inputBox);
  inputBox.setAttribute("type", "checkbox");

  //Skapar händelse
  inputBox.addEventListener("click", () => {
    markAsChecked(inputBox, li);
  });
}

//Kollar om vi checkat vår inputBox
function markAsChecked(inputBox, li) {
  if (inputBox.checked === true) {
    let potato = myList.indexOf("Köp potatis");
    li.innerHTML = "Uppgift avklarad";

  }

}

