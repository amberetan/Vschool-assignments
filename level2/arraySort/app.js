//1. least to greatest
var scores = [12,98,34,85];

scores.sort(function(a,b){
    return a - b
})

console.log(scores)

//2. largest to smallest

scores.sort((a,b) => b - a)

console.log(scores)

//3. shortest string to longest
const strings = ["dog", "wolf", "by", "family", "eaten"]
    
strings.sort((a,b) => a.length - b.length)
  
console.log(strings)

//4. sort array alphabetically

strings.sort()
console.log(strings)

//5. sort objects by age
 const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

byAge.sort((a,b) => a.age - b.age)

console.log(byAge)