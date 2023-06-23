import "./style.css";

function component() {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "Hello newDiv!";
  newDiv.classList.add("red");

  return newDiv;
}

document.body.appendChild(component());
