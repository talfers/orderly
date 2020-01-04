export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
};

export const foods = [
  {
    name: "Beef Pizza",
    img: "/img/pizza_item_1.jpg",
    section: "pizza",
    price: 12,
    toppings: [
      {
        name: "Onion",
        checked: false,
        price: 0.35
      },
      {
        name: "Jalapenos",
        checked: false,
        price: 0.35
      },
      {
        name: "Beef",
        checked: false,
        price: 0.75
      },
      {
        name: "Sausage",
        checked: false,
        price: 0.75
      },
      {
        name: "Tomato",
        checked: false,
        price: 0.5
      },
      {
        name: "Pineapple",
        checked: false,
        price: 0.5
      }

    ]
  },
  {
    name: "Cheese Pizza",
    img: "/img/pizza_item_2.jpg",
    section: "pizza",
    price: 11,
    toppings: [
      {
        name: "Spinach",
        checked: false,
        price: 0.5
      },
      {
        name: "Black Olives",
        checked: false,
        price: 0.25
      },
      {
        name: "Pepperoni",
        checked: false,
        price: 0.25
      },
      {
        name: "Green Peppers",
        checked: false,
        price: 0.35
      },
      {
        name: "Feta Cheese",
        checked: false,
        price: 0.5
      },
      {
        name: "Broccoli",
        checked: false,
        price: 0.5
      }

    ]
  },
  {
    name: "Veggie Pizza",
    img: "/img/pizza_item_3.jpg",
    section: "pizza",
    price: 15,
    toppings: [
      {
        name: "Onions",
        checked: false,
        price: 0.35
      },
      {
        name: "Green Peppers",
        checked: false,
        price: 0.35
      },
      {
        name: "Black Olives",
        checked: false,
        price: 0.25
      },
      {
        name: "Mushrooms",
        checked: false,
        price: 0.5
      },
      {
        name: "Spinach",
        checked: false,
        price: 0.5
      },
      {
        name: "Feta Cheese",
        checked: false,
        price: 0.5
      }

    ]
  },
  {
    name: "Club Sandwich",
    img: "/img/sandwich_item_2.jpg",
    section: "sandwiches",
    price: 8,
    toppings: [
      {
        name: "Boiled Egg",
        checked: false,
        price: 0.5
      },
      {
        name: "Bacon",
        checked: false,
        price: 1.5
      },
      {
        name: "Sausage",
        checked: false,
        price: 0.75
      },
      {
        name: "Pepperoni",
        checked: false,
        price: 0.25
      },
      {
        name: "Green Onion",
        checked: false,
        price: 0.5
      },
      {
        name: "Beef",
        checked: false,
        price: 0.75
      }

    ]
  },
  {
    name: "Turkey & Swiss Sandwich",
    img: "/img/sandwich_item_1.jpg",
    section: "sandwiches",
    price: 7,
    toppings: [
      {
        name: "Pepperoni",
        checked: false,
        price: 0.25
      },
      {
        name: "Green Peppers",
        checked: false,
        price: 0.35
      },
      {
        name: "Onion",
        checked: false,
        price: 0.35
      },
      {
        name: "Mushrooms",
        checked: false,
        price: 0.5
      },
      {
        name: "Extra Cheese",
        checked: false,
        price: 0.5
      },
      {
        name: "Black Olives",
        checked: false,
        price: 0.25
      }

    ]
  },
  {
    name: "BBQ Sandwich",
    img: "/img/sandwich_item_3.jpg",
    section: "sandwiches",
    price: 7,
    toppings: [
      {
        name: "Bacon",
        checked: false,
        price: 1.5
      },
      {
        name: "Pineapple",
        checked: false,
        price: 0.5
      },
      {
        name: "Jalapenos",
        checked: false,
        price: 0.35
      },
      {
        name: "Beef",
        checked: false,
        price: 0.75
      },
      {
        name: "Sausage",
        checked: false,
        price: 0.75
      },
      {
        name: "Extra Cheese",
        checked: false,
        price: 0.5
      }

    ]
  },
  {
    name: "Fries",
    img: "/img/side_item_2.jpg",
    section: "sides",
    price: 3
  },
  {
    name: "House Salad",
    img: "/img/side_item_1.jpg",
    section: "sides",
    price: 4
  },
  {
    name: "Soda",
    section: "drinks",
    img: "/img/soda.jpg",
    price: 2,
    choices: ["Dr. Pepper", "Coca Cola", "Sprite", "Pespi"]
  },
  {
    name: "Tea",
    section: "drinks",
    img: "/img/tea.jpg",
    price: 1.50,
    choices: ["Raspberry", "Lemon", "Cherry"]
  }
]

export const menuItems = foods.reduce((res, item) => {
  if(!res[item.section]) {
    res[item.section] = [];
  }
  res[item.section].push(item);
  return res;
}, {});
