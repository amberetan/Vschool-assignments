//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
const computers = []
for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        computers.push(i)
    }
}
console.log("The number of computers in this array is " + computers.length)

//#2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max, don't let him in!")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max, don't let her in!")
        }
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max!")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Mad Max!")
        }   
    }
}

//#3-Bonus
var lightsOnOff = [9, 3, 4, 2]

var sum = lightsOnOff.reduce(function(a,b){
    return a + b;
}, 0);

console.log(sum)

if (sum % 2 === 1){
    console.log("The light is on!")
} else {
    console.log("The light is off.")
}
/*const lightsOn = []
for(var i = 0; i < lightsOnOff.length; i++){
    if(lightsOnOff[i] % 2 == 1){
        lightsOn.push(i)
    }
}
console.log(lightsOn)
for (var i = 0; i < lightsOn.length; i++){
    if(lightsOn[i] % 2 == 1){
        console.log("light is on!")
    } else {
        console.log("light is off.")
    }
}*/