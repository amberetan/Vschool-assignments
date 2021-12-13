import React, {useContext, useState} from "react"
import {UglyContext} from "./uglyContext"

function Form(){
    const {addUglyThing}= useContext(UglyContext)
    const [newUglyThing, setNewUglyThing] = useState({imgUrl: "", title: "", description: "", comments: []})

    function handleChange(event){
        const {name, value} = event.target
        setNewUglyThing(prevThing => ({...prevThing, [name]:value}))
        console.log(newUglyThing)
    }
    function submitUglyThing(event){
        event.preventDefault()
        addUglyThing(newUglyThing)
    }
    return(
        <form onSubmit={submitUglyThing} className="main-form">
            Name:
            <input 
                name="imgUrl"
                value={newUglyThing.imgUrl}
                placeholder="image URL"
                onChange={handleChange}
            />
            Title:
            <input 
                name="title"
                value={newUglyThing.title}
                placeholder="Title"
                onChange={handleChange}
            />
            Description:
            <input 
                name="description"
                value={newUglyThing.description}
                placeholder="Description"
                onChange={handleChange}
            />
            <br/><br/>
            <button>Submit</button>
        </form>
    )
}

export default Form