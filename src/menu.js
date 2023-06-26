export default function loadMenu() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("menu");

  function dish(title, detail) {
    return {
      title: title,
      detail: detail,
    };
  }

  const menuArr = [];
  menuArr.push(
    dish(
      "Thor's Thunderous Ribs",
      "Juicy and tender pork ribs slathered in a smoky, tangy sauce infused with Odin's secret blend of spices. Served with crispy potato wedges and a side of Viking slaw."
    )
  );
  menuArr.push(
    dish(
      "Loki's Trickster Tacos",
      "A playful twist on traditional tacos, featuring lightly spiced grilled venison or wild boar, topped with pickled onions, juniper-infused salsa, and a drizzle of Odin's Fire sauce. Served with warm tortillas and a side of Freya's Garden Salad."
    )
  );
  menuArr.push(
    dish(
      "Valkyrie's Victory Salad",
      "A vibrant salad bursting with flavors and colors. Fresh mixed greens, seasonal berries, candied walnuts, crumbled goat cheese, and a honey-mustard vinaigrette. Garnished with edible flowers for a touch of ethereal beauty."
    )
  );
  menuArr.push(
    dish(
      "Freya's Feast Platter",
      "A bountiful assortment of delicacies fit for the goddess of love and fertility. Gravlax (cured salmon), pickled herring, smoked trout, and creamy dill sauce served with warm, crusty bread and traditional Nordic accompaniments."
    )
  );
  menuArr.push(
    dish(
      "Odin's Mead-Glazed Duck",
      "Succulent roasted duck breast glazed with a reduction of Odin's favorite mead, infused with hints of juniper and herbs. Served with roasted root vegetables and a velvety parsnip puree."
    )
  );
  menuArr.push(
    dish(
      "Mjolnir's Meatballs",
      "Hearty meatballs crafted from a blend of venison, pork, and aromatic herbs, simmered in a rich lingonberry sauce. Accompanied by buttery mashed potatoes and lingonberry jam."
    )
  );
  menuArr.push(
    dish(
      "Idun's Apple Crisp",
      "A comforting dessert inspired by the goddess of youth and rejuvenation. Cinnamon-spiced baked apples nestled beneath a golden oat crumble topping. Served warm with a dollop of vanilla bean ice cream and a drizzle of caramel."
    )
  );
  menuArr.push(
    dish(
      "Chocolate Ragnarok",
      "Indulge in this heavenly dessert featuring a rich, velvety chocolate mousse layered with crushed hazelnuts and a touch of sea salt. Garnished with a delicate edible gold leaf."
    )
  );

  console.log(menuArr);

  menuArr.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("food");
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
