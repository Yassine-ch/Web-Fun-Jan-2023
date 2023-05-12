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
//Question 2: High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 
//Question 3: Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = Math.round(sum + arr[i]/arr.length);
    }
    var count = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > sum) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 
//Question 4: Array Reverse

function reverse(arr) {
    arr.reverse();
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 






