//1. array of numbers into a total of all the numbers
/*function total(arr) {
    arr.reduce(function(final, sum){
        final += sum
        return final
    })
 }
 
 console.log(total([1,2,3])); // 6*/

 const nums = [1,2,3]

 const totalSum = nums.reduce(function(final,sum){
     final += sum
     return final
 })

 console.log(totalSum)

 //2. Turn array of numbers into a long string of all those numbers

 const stringConcat = nums.reduce(function(final, string){
    final = final + string
    return final
 }, "")

 console.log(stringConcat)

 //3. turn array of voter objects into a ocunt of how mnay people voted
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
function totalVotes(arr) {
    return arr.reduce(function(final, vote){
        if (vote.voted){
            final++
        }
        return final
    }, 0)   
 }
 console.log(totalVotes(voters)); // 7

 //4. add all prices in object array
 function shoppingSpree(arr) {
    return arr.reduce((final, price) => {
        final += price.price
        return final
    }, 0)   
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005

 //5. multiple arays into one --- got this one technically right, though there's a lot of space in between in array item??
 function flatten(arr) {
    return arr.reduce((final, array) => {
        final = final.concat(array)
        return final
    }, []) 
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 //6. group voter by age and if they voted
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce((final, voter) => {
       if(voter.age >= 18 && voter.age <= 25){
           final.numYoungPeople++
       } else if(voter.age >=26 && voter.age <= 35) {
           final.numMidPeople++
       } else if(voter.age >= 36 && voter.age <=55){
           final.numOldPeople++
       }
       if(voter.age >= 18 && voter.age <= 25 && voter.voted){
             final.numYoungVotes++
        } else if(voter.age >=26 && voter.age <= 35 && voter.voted) {
            final.numMidVotes++
        } else if(voter.age >= 36 && voter.age <=55 && voter.voted){
            final.numOldVotes++
        }

       return final

   }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/