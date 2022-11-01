let getContainer = document.getElementById("container");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

let myList = ["Köp potatis", "Ta ut hunden", "Betala räkningar"];

for (let i = 0; i < myList.length; i++) {
  //Skapar <li>
  let li = document.createElement("li");
  ul.appendChild(li);

  // Publicerar listan i min <li>
  li.innerHTML = myList[i];

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
     console.log("Ska hända något");
  }

}

