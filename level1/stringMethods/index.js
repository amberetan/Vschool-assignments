//1.
function upperAndLowerCase(hello) {
    var hello = "Hello"
    var upperHello = hello.toUpperCase()
    var lowerHello = hello.toLowerCase()
    var upperLowerCaseHello = upperHello.concat(lowerHello)
    console.log(upperLowerCaseHello)
}
upperAndLowerCase()

//2.
function findMiddleIndex(){
    var helloWorld = "Hello World"
    console.log(Math.floor(helloWorld.length/2))
}
findMiddleIndex()

//3.
function returnFirstHalf() {
    var helloWorld = "Hello World"
    var hello = helloWorld.slice(0,(helloWorld.length/2))
    console.log(hello)
}
returnFirstHalf()

//4.
function upperHalfLowerHalf () {
    var helloWorld = "Hello World"
    var hello = helloWorld.slice(0, (helloWorld.length/2))
    var world = helloWorld.slice((helloWorld.length/2))
    upperHello = hello.toUpperCase()
    lowerWorld = world.toLowerCase()
    var upperLowerHello = upperHello.concat(lowerWorld)
    console.log(upperLowerHello)
}
upperHalfLowerHalf()

//5.
function capitalize(str) {
    var str = "hey friends! practice practice practice!"
    var strArr = str.split(" ")
    console.log(strArr)
    var newArr = []
    for (var i = 0; i < strArr.length; i++){
        //console.log(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
        newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    }
    console.log(newArr)
    var newArrJoined = newArr.join(" ")
    console.log(newArrJoined)
}
capitalize()