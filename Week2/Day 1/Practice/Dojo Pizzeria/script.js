function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}

let pizzaOne = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizzaOne);

let pizzaTwo = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizzaTwo);

let pizzaThree = pizzaOven("thin crust", "white sauce", ["vegan cheese"], ["artichoke", "cherry tomatoes", "spinach"])
console.log(pizzaThree);

let pizzaFour = pizzaOven("keto crust", "spicy marinara", ["mozzarella", "parmesan"], ["pineapple", "chicken", "jalepenos"])
console.log(pizzaFour)



function randomPizza() {
    var randomerPizza = {
        crustType: ["deep dish", "hand tossed", "thin crust", "keto crust"],
        sauceType: ["traditional", "marinara", "white sauce", "spicy marinara"],
        cheeses: ["mozzarella", "feta", "vegan cheese", "parmesan"],
        toppings: [["pepperoni", "sausage", "mushrooms"], ["olives", "onions", "artichoke"], ["cherry tomatoes", "spinach"], ["pineapple", "chicken", "jalepenos"]]
    }
    let randomCrust = Math.floor(Math.random() * 4)
    let randomSauce = Math.floor(Math.random() * 4)
    let randomCheese = Math.floor(Math.random() * 4)
    let randomTopping = Math.floor(Math.random() * 4)
    pizzaRandom = {};
    pizzaRandom.crustType = randomerPizza.crustType[randomCrust]  
    pizzaRandom.sauceType = randomerPizza.sauceType[randomSauce]  
    pizzaRandom.cheeses = randomerPizza.cheeses[randomCheese]
    pizzaRandom.toppings = randomerPizza.toppings[randomTopping] 

    console.log(pizzaRandom);
} randomPizza();