const addItemForm = document.addItem 

//first function attempt based on 'Forms 1' lesson
/*addItemForm.addEventListener("submit", function(event){
    event.preventDefault()
    const item = addItemForm.title.value
    const newItem = document.createElement('li')
    newItem.textContent = item
    newItem.setAttribute("class","list")
    document.getElementById("list").appendChild(newItem)
})*/

addItemForm.addEventListener("submit",function(event) {
    event.preventDefault()
    const item = addItemForm.title.value
    document.getElementById("list").innerHTML += "<li> <div>" + item + "</div> <button>edit</button> <button>X</button> </li>"
})

