//1.
// const largest = [3, 5, 2, 1, 10, 2, 8, 1]
// const largest1 = []
// const largest2 = []

// for (let i = 0; i < largest.length; i++) {
//     if (largest[i] > largest[0]) {
//         largest1.push(largest[i])
//     }
//     for (let j = 0; j < largest1.length; j++) {
//         if (largest1[j] > largest1[0]) {
//             largest2.push(largest1[1])
//         }
//     }
// }
// console.log(largest1)
// console.log(largest2)

const arr = [1, 2, 3, 4, 10, 8, 1, 7];

var largest = arr.reduce(function(x,y) {
    return (x > y) ? x : y;
});

console.log(largest);

//2.
// const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
// const newArr = []
// function checkArr() {
//     for (let i = 0; i < lettersWithStrings.length; i++)
//         if (lettersWithStrings[i].indexOf('Hey!') !== -1){
//             newArr.push(lettersWithStrings[i])
//         }
// }
// console.log(newArr)
const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
const exclamationArr = lettersWithStrings.filter(e => e.includes("!"))

console.log(exclamationArr)

//3.
function isDivisible(num1,num2) {
    if (num1 % num2 === 0){
        return "true"
    }
    else {
        return "false"
    }
}




console.log(isDivisible(4,2))
console.log(isDivisible(100,3))
console.log(isDivisible(10,2))
