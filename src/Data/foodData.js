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
    price: 12
  },
  {
    name: "Cheese Pizza",
    img: "/img/pizza_item_2.jpg",
    section: "pizza",
    price: 11
  },
  {
    name: "Veggie Pizza",
    img: "/img/pizza_item_3.jpg",
    section: "pizza",
    price: 15
  },
  {
    name: "Sausage Pizza",
    img: "/img/pizza_item_4.jpg",
    section: "sandwiches",
    price: 13
  },
  {
    name: "Some Pizza",
    img: "/img/pizza_item_5.jpg",
    section: "sandwiches",
    price: 10
  },
  {
    name: "Other Pizza",
    img: "/img/pizza_item_6.jpg",
    section: "sandwiches",
    price: 9
  },
  {
    name: "Best Pizza",
    img: "/img/pizza_item_7.jpg",
    section: "sides",
    price: 17
  },
  {
    name: "Egg Pizza",
    img: "/img/pizza_item_8.jpg",
    section: "sides",
    price: 12
  }
]

export const menuItems = foods.reduce((res, item) => {
  if(!res[item.section]) {
    res[item.section] = []
  }
  res[item.section].push(item)
  return res;
}, {});
