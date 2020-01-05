import { useState } from 'react';

export function useCustomizations(defaultToppings) {
  let itemToppings = null;
  if(defaultToppings && defaultToppings !== 'none') {
    itemToppings = defaultToppings.map(t => {
      return (
        {...t, checked: false}
      )
    })
  }
  if(defaultToppings === 'none') {
    itemToppings = [];
  }
  const [toppings, setToppings] = useState(itemToppings || getDefaultToppings());

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
