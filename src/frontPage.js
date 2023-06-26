import Odin from "./hotpot.png";

export default function homePage() {
  const newDiv = document.createElement("div");
  //   // Add the image
  const myImage = new Image();
  myImage.src = Odin;
  newDiv.appendChild(myImage);

  let text =
    "Welcome to Valhalla's Feast: Where the Gods Dine! <br> Step into the realm of the Norse gods and experience a dining adventure like no other. Our doors are open, and we extend a warm welcome to mortals and immortals alike to embark on a culinary journey fit for Odin himself. <br>At Valhalla's Feast, we honor the ancient traditions and epic sagas of Norse mythology, bringing them to life through tantalizing flavors and enchanting ambience. Prepare to be swept away by the magic and mystique of Asgard as you indulge in divine feasts worthy of Valhalla's esteemed warriors. <br>Immerse yourself in the splendor of our grand hall, adorned with mighty banners and intricate Norse artwork. Let the soft glow of flickering torches guide you to your seat, where you will be treated like a true hero of old. Our friendly staff, inspired by Odin's wisdom, will ensure your visit is nothing short of legendary. <br>Savor the taste of the Nine Realms as our skilled chefs conjure dishes of unparalleled creativity and quality. From succulent meats roasted to perfection, infused with herbs and spices from the enchanted forests, to delicacies inspired by the bountiful seas that surround Midgard, our menu is a tapestry of culinary delights. <br>Raise your goblets and toast with Odin's favored mead, crafted by the master brewers of Valhalla. Let the golden nectar flow, fueling tales and camaraderie as you revel in the company of fellow diners, both mortal and divine. <br>Whether you seek a gathering place for feasts and celebrations or a sanctuary to escape the mortal realm, Valhalla's Feast stands ready to fulfill your desires. Join us, and let the wonders of Asgard captivate your senses in an experience that will leave you yearning to return. <br>Hail to Odin, the Allfather! Welcome, honored guests, to Valhalla's Feast!";
  const textArr = text.split("<br>");
  textArr.forEach((para) => {
    text = document.createElement("p");
    text.innerHTML = para;
    newDiv.appendChild(text);
  });

  return newDiv;
}
