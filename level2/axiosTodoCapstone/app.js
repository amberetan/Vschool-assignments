const todoForm = document.todoForm

function getData(){
    axios.get("https://api.vschool.io/ambertan/todo")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}

function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        //Todo Div & items
        const div = document.createElement('div')
        const checkbox = document.createElement('input')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const img = document.createElement('img')
        const delBtn = document.createElement('button')
        const editBtn = document.createElement('button')

        div.className = "listDiv"
        checkbox.setAttribute("name", "listBox")
        checkbox.type = "checkbox"
        checkbox.className = "checkboxes"
        const checkboxDynName = `c${Math.random() * 1000}`
        checkbox.classList.add(checkboxDynName)
        h1.textContent = data[i].title
        h2.textContent = data[i].description
        h3.textContent = "$" + data[i].price 
        img.src = data[i].imgUrl
        delBtn.textContent = "X"
        delBtn.className = "delBtn"
        const delBtnDynName = `d${Math.random() * 1000}`
        delBtn.classList.add(delBtnDynName)
        editBtn.textContent = "edit"
        editBtn.className = "editBtn"
        const editBtnDynName = `e${Math.random() * 1000}`
        editBtn.classList.add(editBtnDynName)

        const todoList = document.getElementById("todoList")
        div.appendChild(checkbox)
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(delBtn)
        div.appendChild(editBtn)
        todoList.appendChild(div)

        //Edit Div & inputs
        const editDiv = document.createElement('div')
        const editTitle = document.createElement('input')
        const editDescription = document.createElement('input')
        const editPrice = document.createElement('input')
        const editImgUrl = document.createElement('input')
        const saveBtn = document.createElement('button')

        editDiv.className = "editDiv"
        editTitle.value = data[i].title
        editDescription.value = data[i].description
        editPrice.value = data[i].price
        editImgUrl.value = data[i].imgUrl
        saveBtn.textContent = "save"
        saveBtn.className = "saveBtn"
        const saveBtnDynName = `s${Math.random() * 1000}`
        saveBtn.classList.add(saveBtnDynName)

        editDiv.appendChild(editTitle)
        editDiv.appendChild(editDescription)
        editDiv.appendChild(editPrice)
        editDiv.appendChild(editImgUrl)
        editDiv.appendChild(saveBtn)
        todoList.appendChild(editDiv)
        editDiv.style.display = "none"

        //Checkbox click adds Line-Through and updates 'complete' on API
        let domSelectedCheckBox = document.getElementsByClassName(checkboxDynName)[0]
        domSelectedCheckBox.addEventListener("change", function(){
            if(domSelectedCheckBox.checked) {
                domSelectedCheckBox.parentElement.style.textDecoration = "line-through"
                domSelectedCheckBox.parentElement.style.color = "purple"
                localStorage.setItem(checkboxDynName, domSelectedCheckBox.checked)
                axios.put("https://api.vschool.io/ambertan/todo/" + data[i]._id, {completed: true})
                    .then(response => console.log("Your item was marked complete"))
                    .catch(error => console.log(error))
            }
            else{
                domSelectedCheckBox.parentElement.style.textDecoration = "none"
                domSelectedCheckBox.parentElement.style.color = "black"
                localStorage.setItem(checkboxDynName, domSelectedCheckBox.checked)
                axios.put("https://api.vschool.io/ambertan/todo/" + data[i]._id, {completed: false})
                    .then(response => console.log("Your item was marked incomplete"))
                    .catch(error => console.log(error))
            }
        })
        
        let checked = JSON.parse(localStorage.getItem(checkboxDynName));
        if (checked === true){
            domSelectedCheckBox.checked = true
        }
        else {
            domSelectedCheckBox.checked = false
        }
        //Delete Button, removes from API and dom
        let domDelBtn = document.getElementsByClassName(delBtnDynName)[0]
        domDelBtn.addEventListener("click", function(){
            domDelBtn.parentElement.remove()
            axios.delete("https://api.vschool.io/ambertan/todo/" + data[i]._id)
                .then(response => console.log("Your item was succesfully deleted"))
                .catch(error => console.log(error))
        })

        //Edit Button
        let domEditBtn = document.getElementsByClassName(editBtnDynName)[0]
        domEditBtn.addEventListener("click", function(){
            div.style.display = 'none'
            editDiv.style.display = 'block'

        })

        //Save Button, updates API and dom
        let domSaveBtn = document.getElementsByClassName(saveBtnDynName)[0]
        domSaveBtn.addEventListener('click', function(){
            div.style.display = 'grid'
            editDiv.style.display = 'none'
            const editTodo = {
                title: editTitle.value,
                description: editDescription.value,
                price: editPrice.value,
                imgUrl: editImgUrl.value
            }
            axios.put("https://api.vschool.io/ambertan/todo/" + data[i]._id, editTodo)
                .then(response => console.log("Your item was successfully edited"))
                .catch(error => console.log(error))
            h1.textContent = editTitle.value
            h2.textContent = editDescription.value
            h3.textContent = "$" + editPrice.value 
            img.src = editImgUrl.value
        })
    }
}

function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }

    todoForm.title.value = ''
    todoForm.description.value = ''
    todoForm.price.value = ''
    todoForm.imgUrl.value = ''

    axios.post("https://api.vschool.io/ambertan/todo", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})

