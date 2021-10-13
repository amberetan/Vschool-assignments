var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '))

//I need to take 'input' and assign each letter a number? and then using 'shift' to add those numbers to the original (or subtract for over 26) and then convert back into a number

const inputArr = input.split('')
// console.log(inputArr)
const numArr = inputArr.map(letter => {
    const letterNum = letter.charCodeAt(0) - 97
    if(letterNum >= 0 && letterNum <=25){
        const updatedLetterNum = letterNum + shift
        if(updatedLetterNum > 25){
            const roundTheBend = updatedLetterNum - 25
            const updatedLetter = String.fromCharCode(97 + roundTheBend)
            return updatedLetter
        } 
        else {
            const updatedLetter = String.fromCharCode(97 + updatedLetterNum)
            return updatedLetter
        }
    }
    else{
        return letter
    }
})
// console.log(numArr)

const encryptedString = numArr.join('')
console.log(encryptedString)


