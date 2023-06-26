import Valhalla from "./valhalla.jpeg";

export default function contactUs() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("footer");

  // Add the image
  const myImage = new Image();
  myImage.src = Valhalla;
  newDiv.appendChild(myImage);

  //   const contact = document.createElement("div");
  const address = document.createElement("p");
  address.textContent = "Find us at: Valhalla, 123";
  newDiv.appendChild(address);
  const phone = document.createElement("p");
  phone.textContent = "Call us on: 123456789";
  newDiv.appendChild(phone);

  //   newDiv.appendChild(contact);

  return newDiv;
}
