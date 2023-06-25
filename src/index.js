import PrintMe from "./print";
import "./style.css";
import Water from "./water.jpeg";

function component() {
  const newDiv = document.createElement("div");
  const btn = document.createElement("button");

  newDiv.innerHTML = "Hello newDiv!";
  newDiv.classList.add("red");

  btn.innerHTML = "Click me and check the console!";
  btn.addEventListener("click", PrintMe);

  newDiv.appendChild(btn);

  // Add the image
  const myImage = new Image();
  myImage.src = Water;

  //   newDiv.appendChild(myImage);

  return newDiv;
}

document.body.appendChild(component());
