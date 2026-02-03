const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepporoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaOb) {
  menu.push(pizzaOb);
  return menu;
}
console.log(addNewPizza({ name: "Pepp", price: 20 }));
