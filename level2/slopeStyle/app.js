//1.
function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2.
function combineFruit(fruit, sweets, vegetables){
    let f = fruit
    let s  = sweets
    let v  = vegetables
    return {
        fruit: f,
        sweets: s,
        vegetables: v
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


//3.

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }

  console.log(parseSentence(vacation))

  //4.
  function returnFirst(items){
    const [firstItem] = items;
    return firstItem
}

//5.
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are: ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log (returnFavorites(favoriteActivities))

//6.
function combineAnimals(...animals) {  
    return [...realAnimals,...magicalAnimals,...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//7.
function product(...numbers) {    
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
}

//8. 
function unshift(array, ...values) {  
    return [...values, ...array];
  }

//9.
function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        [firstName, lastName] = name
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]