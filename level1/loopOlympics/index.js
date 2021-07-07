//Preliminaries
for (var i = 0; i <= 9; i++){
    console.log(i)
}

for (var i = 9; i >= 0; i--){
    console.log(i)
}

const fruit1 = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit1.length; i++){
    console.log(fruit1[i])
}

//BRONZE
const numbers = []

for (var i = 0; i <=9; i++){
    numbers.push(i)
}
console.log(numbers)

for (var i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

//OR

for (var i = 0; i <= 100; i +=2){
    console.log(i)
}

const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruit3 = []
for (var i = 0; i < fruit2.length; i += 2){
    fruit3.push(fruit2[i])
}
console.log(fruit3)

//SILVER

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

for (var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
}

const namesArr = []
const occupationArr = []

for (var i = 0; i < peopleArray.length; i++){
    namesArr.push(peopleArray[i].name)
    occupationArr.push(peopleArray[i].occupation)
}
console.log(namesArr)
console.log(occupationArr)

const namesArr2 = []
const occupationArr2 = []

for (var i = 0; i < peopleArray.length; i++){
    if(i % 2 === 0){
        namesArr2.push(peopleArray[i].name)
    }
    if(i % 2 === 1) {
        occupationArr2.push(peopleArray[i].occupation)
    }
}
console.log(namesArr2)
console.log(occupationArr2)

//GOLD
//1.
// const array1 = []
// const bigArr1 = []

// for (var i = 0; i <= 2; i++){
//     array1.push("0")
// }
// for (var i = 0; i < 3; i++){
//     bigArr1.push(array1)
// }

// console.log(array1)
// console.log(bigArr1)

const bigArr1 = []

for (var i = 0; i < 3; i++){
    bigArr1.push([])
    for( var j = 0; j < 3; j++){
        bigArr1[i].push("0")
    }
}
console.log(bigArr1)


//2.
const bigArr2 = []

for (var i = 0; i < 3; i++){
    bigArr2.push([])
    for( var j = 0; j < 3; j++){
        bigArr2[i].push(i)
    }
}
console.log(bigArr2)

//3.
const bigArr3 = []

for (var i = 0; i < 3; i++){
    bigArr3.push([])
    for( var j = 0; j < 3; j++){
        bigArr3[i].push(j)
    }
}
console.log(bigArr3)

//4.
const bigArr4 = []

for (var i = 0; i < 3; i++){
    bigArr4.push([])
    for( var j = 0; j < 3; j++){
        bigArr4[i].push(j)
    }
}
for (var i = 0; i < 3; i++){
    for (var j = 0; j < bigArr4[i].length; j++){
        bigArr4[i][j] = "X"
    }
}
console.log(bigArr4)