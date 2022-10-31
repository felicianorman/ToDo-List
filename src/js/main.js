//Hittar ul
let ulList = document.getElementById("listItems");

//Skapar <li> taggar
let liTagOne = document.createElement("li");
let liTagTwo = document.createElement("li");
let liTagThree = document.createElement("li");

//Skapar <p>
let pTagOne = document.createElement("p");
let pTagTwo = document.createElement("p");
let pTagThree = document.createElement("p");

//Skapar <span> som ska innehålla papperskorg
let spanTagOne = document.createElement("span");
let spanTagTwo = document.createElement("span");
let spanTagThree = document.createElement("span");

//Lägger till papperskorg-ikon
spanTagOne.innerHTML = '<i class="fa-solid fa-trash-can" id="delete"></i>';
spanTagTwo.innerHTML = '<i class="fa-solid fa-trash-can" id="delete"></i>';
spanTagThree.innerHTML = '<i class="fa-solid fa-trash-can" id="delete"></i>';


//Lägger till innehåll i listan
pTagOne.innerHTML = "Lämna in JS uppgift";
pTagTwo.innerHTML = "Lämna in JS uppgift";
pTagThree.innerHTML = "Lämna in JS uppgift";


//Publicerar i DOM
ulList.appendChild(liTagOne);
ulList.appendChild(liTagTwo);
ulList.appendChild(liTagThree);

liTagOne.appendChild(pTagOne);
liTagTwo.appendChild(pTagTwo);
liTagTwo.appendChild(pTagThree);

pTagOne.appendChild(spanTagOne);
pTagTwo.appendChild(spanTagTwo);
pTagThree.appendChild(spanTagThree);

//Hittar papperskorgen
let trashCan = docuemnt.getElementById("delete");