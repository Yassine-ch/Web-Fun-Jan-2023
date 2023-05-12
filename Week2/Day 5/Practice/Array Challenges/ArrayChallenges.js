//Question 1: Always Hungry
var yummy = ""
function alwaysHungry(arr) {
    var hungryMessage = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
           yummy = "yummy"
           console.log(yummy)
        }
        if (arr[i] !== "food") {
            hungryMessage = "I'm Hungry" 
        }
    }  
    return hungryMessage
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

var hungry = alwaysHungry([4, 1, 5, 7, 2]);
console.log(hungry)
