
// 1. Create an array of pizzaToppings with at least four different toppings add "and" before the
//  last topping in a list of toppings.  I wonder if I was suppose to use typeof


const pizzaToppings = ["Vegie", "Chicken", "Sausage", "Pineapple", "Cheese"]
console.log(pizzaToppings)





function greetCustomer() {
  let greeting = `Welcome to the Pizza House! We specialize in these topping: `
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `
  }
  console.log(greeting)

}
greetCustomer()

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size}, ${crust}, crust pizza with `;
  for (let topping of pizzaToppings) {
    order += `${topping}, `
  }
  console.log(`${order}, coming up!`);
  return [size, crust, toppings]
}

let customerOrder = getPizzaOrder("medium", "thin", "Chicken", "Pineapple")

function preparePizza([orderSize, orderCrust, orderTopping]) {
  console.log("pizza is cooking")
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderTopping,
  }
}

let cookedPizza = preparePizza(customerOrder)

function servePizza(pizza) {
  let orderready = `Order up! Here is your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderready += `${topping}, `
  }
  console.log(`${orderready}!`);
  return pizza
}

servePizza(cookedPizza)






