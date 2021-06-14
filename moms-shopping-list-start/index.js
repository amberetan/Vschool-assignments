let form = document.addItem 
let list = document.querySelector('#list')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let title = form.title.value
    form.title.value = ''

    let li = document.createElement('li')
    let div = document.createElement('div')
    let clearBtn = document.createElement('button')
    
    let editBtn = document.createElement('button')
    let editInput = document.createElement('input')
    let editDiv = document.createElement('div')
    let saveBtn = document.createElement('button')

    div.textContent = title
    editBtn.textContent = 'edit'
    clearBtn.textContent = 'X'
    saveBtn.textContent = 'save'
    editInput.value = title

    editDiv.style.display = 'none'

    li.appendChild(div)
    li.appendChild(editBtn)
    li.appendChild(clearBtn)

    editDiv.appendChild(editInput)
    editDiv.appendChild(saveBtn)


    list.appendChild(li)
    list.appendChild(editDiv)

    clearBtn.addEventListener('click', function(){
        list.removeChild(li)
    })
    editBtn.addEventListener('click', function(){
        li.style.display = 'none'
        editDiv.style.display = 'block'
    })
    saveBtn.addEventListener('click', function(){
        li.style.display = 'block'
        div.textContent = editInput.value
        editDiv.style.display = 'none'
    })
})







//first function attempt based on 'Forms 1' lesson
/*addItemForm.addEventListener("submit", function(event){
    event.preventDefault()
    const item = addItemForm.title.value
    const newList = document.createElement('li')
    newList.textContent = item
    const randNum = Math.random() * 1000
    newList.setAttribute("class", `${randNum}`)
    let clearButton = document.createElement('button')
    clearButton.textContent = "X"
    clearButton.setAttribute("class","clearButton")
    document.getElementById("list").append(newList)
    document.getElementsByClassName(`${randNum}`)[0].appendChild(clearButton)
    //console.log(clearButton.parentElement)
    console.log(clearButtonList)
    clearButton.addEventListener('click', function removeList(){
        this.parentElement.remove()
    
      });
      
    //clearButton.addEventListener("click")
    //let deleteBudocument.createElement("button")

   
    
})*/

//2nd add item attempt, innerHTML gave me problems
/*addItemForm.addEventListener("submit",function(event) {
    event.preventDefault()
    const item = addItemForm.title.value
    document.getElementById("list").innerHTML += "<li> <div>" + item + "</div> <button>edit</button> <button class='clearButton'>X</button> </li>"
})*/


/*This works for existing list items but not new appended ones
const clearButton = document.querySelectorAll('.clearButton')
for (let i = 0; i < clearButton.length; i++) {
    clearButton[i].addEventListener("click", removeList)
    function removeList(){
        this.parentElement.remove()
    }
}*/

/*This worked for one button only
const clearButton = document.getElementById("clearButton")
clearButton.addEventListener("click", clearItem)
function clearItem() {
    this.parentElement.remove()
}*/