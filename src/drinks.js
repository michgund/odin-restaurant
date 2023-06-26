export default function loadDrinks() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("menu");

  function drink(title, detail) {
    return {
      title: title,
      detail: detail,
    };
  }

  const menuArr = [];
  menuArr.push(
    drink(
      "Mjolnir's Mead Brew",
      "Raise your tankards and partake in the legendary brew of the gods. Mjolnir's Mead, a potent and honeyed nectar, crafted with ancient recipes passed down through generations. This traditional mead, aged to perfection, offers a balance of sweetness and complexity, with notes of wildflowers and hints of Nordic herbs. Served in carved wooden mugs, this brew embodies the spirit of celebration and camaraderie. Join us in toasting the gods with this revered libation, invoking the power of Mjolnir, Thor's mighty hammer."
    )
  );

  console.log(menuArr);

  menuArr.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("food");
    foodDiv.classList.add("drink");
    let foodHead = document.createElement("p");
    foodHead.textContent = food.title;
    foodDiv.appendChild(foodHead);
    let foodSub = document.createElement("p");
    foodSub.textContent = food.detail;
    foodDiv.appendChild(foodSub);
    newDiv.appendChild(foodDiv);
  });

  return newDiv;
}
