//Data Types - Create variable for each data type below using the example provided for a string 
//String - denoted/represented by " " ' ' - they are great for words,language
var travelMonth = 'December'

////////

//Number - anything of numerical value - just a number
////////
var numberOfDays = '6'


//Boolean - true or false 
/////////
var hasPassport = true


//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 
var passengers = ['Amber','Tony','Thomas','Luna','Bo','Vance']


/////////

//////////
//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////

var ticketHolderOne = {
    firstName:'Amber',
    age:34,
    tsaPrecheck:true,
    otherPassengers: ['tony', 'thomas', 'luna', 'bo', 'vance']
}
console.log(ticketHolderOne.otherPassengers[2])
console.log(ticketHolderOne["firstName"])


//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement
//Using below example below to create your own conditional statement.
var color = "blue"
if (color === "red") {
    console.log("I am red!")
} else if (color === 'blue') {
    console.log("I am blue!")
} else {
    console.log(" i am something else!")
}


var travel = "plane"
if (travel === "car") {
    console.log("Road Trip!")
} else if (travel === "train"){
    console.log("Choo! Choo!")
} else if (travel === "plane"){
    console.log("First Class Please!")
} else {
    console.log("I'm Staying Home")
}

/////////


//For Loops - A their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 
//i = i + 1 same i++
//Create 1 for loop
function zeroToThree() {
    for (var i = 0; i < 3; i++) {
        console.log(i)
    }
}

function countToFive(){
    for (var i=0; i<=5; i++) {
        console.log(i)
    }
}
countToFive()

function listPassengers(){
    for (var i=0; i<=5; i++){
        console.log(passengers[i])
    }
}



//////////////////
//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method


var bookingButton = document.getElementById("bookingButton")
bookingButton.addEventListener("click" , listPassengers)


function ooh (){
    console.log("Ooooh!")
} 
var angkorPicClick = document.getElementById("angkorPic")
angkorPicClick.addEventListener("dblclick", ooh)
