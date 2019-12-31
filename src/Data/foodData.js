export const foods = [
  {
    name: "Beef Pizza",
    img: "/img/pizza_item_1.jpg",
    section: "pizza"
  },
  {
    name: "Cheese Pizza",
    img: "/img/pizza_item_2.jpg",
    section: "pizza"
  },
  {
    name: "Veggie Pizza",
    img: "/img/pizza_item_3.jpg",
    section: "pizza"
  },
  {
    name: "Sausage Pizza",
    img: "/img/pizza_item_4.jpg",
    section: "sandwich"
  },
  {
    name: "Some Pizza",
    img: "/img/pizza_item_5.jpg",
    section: "sandwich"
  },
  {
    name: "Other Pizza",
    img: "/img/pizza_item_6.jpg",
    section: "sandwich"
  },
  {
    name: "Best Pizza",
    img: "/img/pizza_item_7.jpg",
    section: "sides"
  },
  {
    name: "Egg Pizza",
    img: "/img/pizza_item_8.jpg",
    section: "sides"
  },
]

export const menuItems = foods.reduce((res, item) => {
  if(!res[item.section]) {
    res[item.section] = []
  }
  res[item.section].push(item)
  return res;
}, {});
