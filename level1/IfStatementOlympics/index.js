var person = {
    name: "bobby",
    age: 12
}

//if(person.age>=18){
  //  console.log("<theNameOfThePersonInObject>is allowed to go to the movie")
//}
//if(person.name[0]==="b"){
  //  console.log("is allowed to go to the movie")
//}
if(person.age>=18 && person.name[0]==="b"){
    console.log("is allowed to go to the movie")
} else {
    console.log("is not allowed")
}
//if(5>3){
    //console.log("is greater than")
//}

//var cat = {
  //  length: 3,
 //   color: "black"
//}
//var dog = {
  //  length: 5,
    //color: "brown"
//}
//if(cat.length === 3){
  //  console.log("is the length")
//}

//if(cat === dog){
  //  console.log ("is the same")
//} else {
//    console.log("not the same")
//}

if(1==="1"){
    console.log('strict')
} else if(1=="1"){
    console.log('loose')
} else {
    console.log('not equal at all')
}

if(1<=2 && 2===4){
    console.log('yes')
}
