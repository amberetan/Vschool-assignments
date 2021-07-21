//1. array of numbers that are doubles of first array

const arr1 = [2,50,10,100]
function doubleNumbers(array){
return array.map(function(num){
    return num * 2
})
}
console.log(doubleNumbers(arr1))

//2. array of numbers and make them strings

const arr2 = [2,50,10,100]

const result2 = arr2.map(function(num){
    return num.toString()
})

console.log(result2)

//3. capitalize each of an array of names

const arr3 = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const result3 = arr3.map(function(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
})

console.log(result3)

//4. array of strings of the names

const arr4 = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

const result4 = arr4.map(function(name){
    return name.name
})

console.log(result4)

//5. array of strings of names saying if they can go to Matrix.

const arr5 = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

const result5 = arr5.map(function(e){
    if (e.age > 18) {
        return e.name + " can go to the Matrix!"
    }
    else {
        return e.name + " is under age!"
    }
})

console.log(result5)

//6. array of names in h1s, and ages in h2s

const arr6 = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

const result6 = arr6.map(function(e){
    return "<h1>" + e.name + "</h1><h2>" + e.age + "</h2"
})

console.log (result6)