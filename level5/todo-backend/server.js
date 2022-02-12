const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');

app.use(express.json())

//data
const todoList = [
    {
        name: "Make Bed",
        description: "Wash and replace sheets and pillow cases, tuck in blankets nicely, smooth wrinkles.",
        imgURL: "https://www.wellandgood.com/wp-content/uploads/2018/09/GettyImages-1020703480-svetikd-make-bed_1280x826_true_75.jpg",
        completed: false,
        _id: uuidv4(),
    },
    {
        name: "Wash Dishes",
        description: "Empty dishwasher, load a run dishes, hand wash glass and pots",
        imgURL: "https://cf.ltkcdn.net/cleaning/images/orig/269791-1600x1030-how-wash-dishes-practical-tips-ultimate-clean.jpg",
        completed: false,
        _id: uuidv4(),
    },
    {
        name: "Laundry",
        description: "Fold dry clothes from the dryer, switch from washer to dryer, load washer.",
        imgURL: "https://www.rd.com/wp-content/uploads/2021/09/GettyImages-1181334518-MLedit.jpg?resize=1536,1024",
        completed: false,
        _id: uuidv4(),
    },
    {
        name: "Vacuum Living Room",
        description: "Pick up items off the floor, vacuum.",
        imgURL: "https://d1rrbfu5dru7i1.cloudfront.net/images/blog/import/vacuuming-tips-main.1903100949188.jpg",
        completed: false,
        _id: uuidv4(),
    },
    {
        name: "Activities for Daily Living",
        description: "Shower, brush teeth & hair, wash face, get dressed.",
        imgURL: "https://www.broomfielddentists.com/wp-content/uploads/2018/11/brushing_teeth.jpg",
        completed: false,
        _id: uuidv4(),
    },
    {
        name: "Grocery Shopping",
        description: "Sam's List: Brown Sugar, broccoli cheddar soup, almond milk, grapes, apples",
        imgURL: "https://www.gecurrent.com/sites/default/files/styles/large/public/images/how-is-the-grocery-store-footprint-changing-850x567.jpg?itok=iwp-U_eS",
        completed: false,
        _id: uuidv4(),
    },
    {
        name: "Homework",
        description: "Work on Level 5 assignments and videos.",
        imgURL: "https://www.thesimpledollar.com/wp-content/uploads/2017/11/Work-from-home-image-1096x477.jpg",
        completed: false,
        _id: uuidv4(),
    },
    
]

//routes


app.get("/", (req, res) => {
    res.send(todoList)
})
app.get("/:todoId", (req,res) => {
    const todoId = req.params.todoId
    const foundTodo = todoList.filter(todo => todo._id === todoId)
    res.send(foundTodo)
})
app.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoList.push(newTodo)
    res.send(`Successfully added new To-Do to your List`)
})
app.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updatedTodo)
})
app.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("Successfully removed list item.")
})


app.listen(8500, () => {console.log("Server is running at 8500")})