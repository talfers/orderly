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
    canCustomize: true,
    toppings: []
  },
  {
    name: "Cheese Pizza",
    img: "/img/pizza_item_2.jpg",
    section: "pizza",
    price: 11,
    canCustomize: true,
    toppings: []
  },
  {
    name: "Veggie Pizza",
    img: "/img/pizza_item_3.jpg",
    section: "pizza",
    price: 15,
    canCustomize: true,
    toppings: []
  },
  {
    name: "Sausage Pizza",
    img: "/img/pizza_item_4.jpg",
    section: "sandwiches",
    price: 13,
    canCustomize: false,
    toppings: []
  },
  {
    name: "Some Pizza",
    img: "/img/pizza_item_5.jpg",
    section: "sandwiches",
    price: 10,
    canCustomize: false,
    toppings: []
  },
  {
    name: "Other Pizza",
    img: "/img/pizza_item_6.jpg",
    section: "sandwiches",
    price: 9,
    canCustomize: false,
    toppings: []
  },
  {
    name: "Best Pizza",
    img: "/img/pizza_item_7.jpg",
    section: "sides",
    price: 17,
    canCustomize: false
  },
  {
    name: "Egg Pizza",
    img: "/img/pizza_item_8.jpg",
    section: "sides",
    price: 12,
    canCustomize: false
  },
  {
    name: "Soda",
    section: "drinks",
    img: "/img/soda.jpg",
    price: 2,
    choices: ["Dr. Pepper", "Coca Cola", "Sprite", "Pespi"],
    canCustomize: false
  },
  {
    name: "Tea",
    section: "drinks",
    img: "/img/tea.jpg",
    price: 1.50,
    choices: ["Raspberry", "Lemon", "Cherry"],
    canCustomize: false
  }
]

export const menuItems = foods.reduce((res, item) => {
  if(!res[item.section]) {
    res[item.section] = [];
  }
  res[item.section].push(item);
  return res;
}, {});
