//Qualifier
var header = document.getElementById("header")
header.innerText = "JavaScript Made This!!"
header.style.color = "black"
header.style.textAlign = "center"
header.style.fontWeight = "bold"
header.style.fontSize = "40px"

var p = document.createElement("p")
header.append(p)
var subtitle = document.querySelector("p")

subtitle.innerHTML = "<span id='myName'>Amber Tan</span> wrote the JavaScript"
subtitle.style.fontSize = "20px"
subtitle.style.fontWeight = "normal"

var myName = document.getElementById("myName")
myName.style.color = "orange"

//Bronze
var messageLeft = document.getElementsByClassName("left")
messageLeft[0].innerText = "How is the farming business?"
messageLeft[1].innerText = "That's great to hear, you're amazing!"

var messageRight = document.getElementsByClassName("right")
messageRight[0].innerText = "It's booming, brussel sprouts and turnips coming out my ears!"
messageRight[1].innerText = "Thanks for being a genuine and constant friend!"

function clearHistory(){
    var clearMessages = document.querySelector(".messages");
    clearMessages.parentNode.removeChild(clearMessages);
}

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearHistory)

//Silver
var selectMenu = document.getElementById("theme-drop-down")
selectMenu[0].setAttribute("id","blueBrown")
selectMenu[1].setAttribute("id","redBlack")
selectMenu.innerHTML += "<option value='theme-three' id='greenYellow'>green/yellow</option>"


selectMenu.addEventListener("change", function (){
    if (selectMenu.value === "theme-one") {
        var brownLeft = document.getElementsByClassName("left");
        for (i = 0; i < brownLeft.length; i++) {
            brownLeft[i].style.backgroundColor = "burlywood";
        }
        var blueRight = document.getElementsByClassName("right");
        for (i = 0; i < blueRight.length; i++) {
            blueRight[i].style.backgroundColor = "lightBlue";
            blueRight[i].style.color = "black";
        }
    }
    else if(selectMenu.value === "theme-two")   {
        var redLeft = document.getElementsByClassName("left");
        for (i = 0; i < redLeft.length; i++) {
            redLeft[i].style.backgroundColor = "indianRed";
        }
        /*var redLeft = document.getElementsByClassName("left");
        redLeft[0].style.backgroundColor = "red"
        redLeft[1].style.backgroundColor = "red"*/
        var blackRight = document.getElementsByClassName("right"); 
        for (i = 0; i < blackRight.length; i++) {
            blackRight[i].style.backgroundColor = "darkSlateGray";
            blackRight[i].style.color = "white";
        }
    }
    else if (selectMenu.value === "theme-three") {
        var greenLeft = document.getElementsByClassName("left");
        for (i = 0; i < greenLeft.length; i++) {
            greenLeft[i].style.backgroundColor = "mediumSeaGreen";
        }
        var yellowRight = document.getElementsByClassName("right");
        for (i = 0; i < yellowRight.length; i++) {
            yellowRight[i].style.backgroundColor = "paleGoldenRod";
            yellowRight[i].style.color = "black";
        } 
    }
}
)


//tried to grab Id of <options>, did not work
/*function blueBrownTheme(){
    var brownLeft = document.getElementsByClassName("left");
    brownLeft.style.backgroundColor = "burlywood"
    var blueRight = document.getElementsByClassName("right")
    blueRight.style.backgroundColor = "lightBlue"
}
var blueBrown = document.getElementById("blueBrown")
blueBrown.addEventListener("change", blueBrownTheme) */




//Gold
var buttons = document.querySelectorAll("button")
buttons[1].setAttribute("id", "sendButton")
var sendButton = document.getElementById("sendButton")
sendButton.setAttribute("type", "button")

sendButton.addEventListener("click", sendMessage)


function sendMessage(){
    var newMessage = document.createElement("div");
    var messageContent = document.createTextNode("testing");
    newMessage.appendChild(messageContent);
    newMessage.setAttribute("class", "message left")
    document.querySelector(".messages").appendChild(newMessage);
    var input = document.getElementById("input");
    newMessage.innerText = input.value;
}
