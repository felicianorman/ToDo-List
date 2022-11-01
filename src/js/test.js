let getContainer = document.getElementById("container");

//Skapar ul
let ul = document.createElement("ul");
getContainer.appendChild(ul);

let myList = ["Köp potatis", "Ta ut hunden", "Betala räkningar"];

for(let i = 0; i < myList.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = myList[i];

    let inputBox = document.createElement("input");
    li.appendChild(inputBox);
    inputBox.setAttribute("type", "checkbox");

    
}