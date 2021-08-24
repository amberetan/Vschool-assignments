var str = "abcdefghijklmnopqrstuvwxyz"

const arr = str.split('')
newArr = []
for (let i = arr.length; i >= 0; i--) {
    newArr.push(str[i])
}

var newStr = newArr.join("")

console.log(newStr)