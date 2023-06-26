import "./style.css";
import frontPage from "./frontPage";
import loadMenu from "./menu";
import loadDrinks from "./drinks";

// function component() {
//   const newDiv = document.createElement("div");
//   const btn = document.createElement("button");

//   newDiv.innerHTML = "Hello newDiv!";
//   newDiv.classList.add("red");

//   btn.innerHTML = "Click me and check the console!";
//   btn.addEventListener("click", PrintMe);

//   newDiv.appendChild(btn);

//   // Add the image
//   const myImage = new Image();
//   myImage.src = Water;

//   //   newDiv.appendChild(myImage);

//   return newDiv;
// }

// document.body.appendChild(component());

const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
document.body.appendChild(mainDiv);

const h1 = document.createElement("h1");
h1.textContent = "Valhalla's Feast";
mainDiv.appendChild(h1);

const linkDiv = document.createElement("div");
linkDiv.classList.add("link");

const homeLink = document.createElement("button");
homeLink.textContent = "Home";
homeLink.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(frontPage());
});
linkDiv.appendChild(homeLink);

const foodLink = document.createElement("button");
foodLink.textContent = "Menu";
foodLink.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(loadMenu());
});
linkDiv.appendChild(foodLink);

const drinksLink = document.createElement("button");
drinksLink.textContent = "Drinks";
drinksLink.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(loadDrinks());
});
linkDiv.appendChild(drinksLink);

mainDiv.appendChild(linkDiv);

const contentDiv = document.createElement("div");
contentDiv.setAttribute("id", "content");
contentDiv.appendChild(frontPage());
mainDiv.appendChild(contentDiv);
