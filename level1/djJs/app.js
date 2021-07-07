var button = document.getElementById("button")

function blueSquare(){
    button.style.backgroundColor = "blue"
}
function redSquare(){
    button.style.backgroundColor = "red"
}
function yellowSquare(){
    button.style.backgroundColor = "yellow"
}
function greenSquare(){
    button.style.backgroundColor = "green"
}
function orangeSquare(){
    button.style.backgroundColor = "orange"
}

button.addEventListener("mouseover", blueSquare)
button.addEventListener("mousedown", redSquare)
button.addEventListener("click", yellowSquare)
button.addEventListener("dblclick", greenSquare)
button.addEventListener("wheel", orangeSquare)
document.addEventListener("keydown", e => {
        if(e.key === 'b') {
            button.style.backgroundColor = "blue"
        } else if (e.key === 'r') {
            button.style.backgroundColor = "red"
        } else if (e.key === 'g') {
            button.style.backgroundColor = "green"
        } else if (e.key === 'y') {
            button.style.backgroundColor = "yellow"
        } else if (e.key === 'o') {
            button.style.backgroundColor = "orange"
        }
    }
)
