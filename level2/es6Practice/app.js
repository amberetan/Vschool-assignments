//let and const
const name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat","dog"])

//task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(carrots))

//Task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}

console.log(filterForFriendly(people))

//Task 3

function doMathSum(a, b) {
    return a + b
}

var produceProduct = (a, b) => a * b

//Task 4

function printString(firstName = "Jane", lastName = "Doe", age = "100") {
    return (`Hi, ${firstName} ${lastName}, how does it feel to be ${age} years old?`)
}

console.log(printString("amber", "tan"))

//Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")
 }

 console.log(filterForDogs(animals))

 //Task 6

 function travelMessage(location, name) {
     return (`Hi ${name}! \n\nWelcome to ${location}. \n\nI hope you enjoy your stay.  Please ask the president of ${location} if you need anything.`)
 }
 console.log(travelMessage("Hawaii","Janice"))