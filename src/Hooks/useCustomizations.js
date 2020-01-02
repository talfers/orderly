import { useState } from 'react';

export function useCustomizations(defaultToppings) {
  const [toppings, setToppings] = useState(defaultToppings || getDefaultToppings());

  function checkTopping(index){
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    toppings,
    setToppings,
    checkTopping
  }
}

const toppingsList = [
  "Pepperoni",
  "Mushrooms",
  "Onions",
  "Sausage",
  "Bacon",
  "Extra cheese",
  "Black olives",
  "Green peppers",
  "Pineapple",
  "Spinach"
]

function getDefaultToppings() {
  return toppingsList.map(topping => ({
      name: topping,
      checked: false,
      price: 0.5
    })
  )
}
