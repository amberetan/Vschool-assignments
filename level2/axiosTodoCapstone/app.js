const todoForm = document.todoForm

function getData(){
    axios.get("https://api.vschool.io/ambertan/todo")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}

function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        const checkbox = document.createElement('input')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const img = document.createElement('img')

        div.className = "listDiv"
        checkbox.type = "checkbox"
        checkbox.className = "checkboxes"
        h1.textContent = data[i].title
        h2.textContent = data[i].description
        h3.textContent = "$" + data[i].price 
        img.src = data[i].imgUrl

        const todoList = document.getElementById("todoList")
        div.appendChild(checkbox)
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(img)
        todoList.appendChild(div)

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