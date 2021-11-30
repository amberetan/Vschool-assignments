import React, {useContext, useState} from "react"
import {UglyContext} from "./uglyContext"

function Form(){
    const context = useContext(UglyContext)
    const [newUglyThing, setNewUglyThing] = useState({imgURL: "", title: "", description: ""})

    function handleChange(event){
        const {name, value} = event.target
        setNewUglyThing(prevThing => ({...prevThing, [name]:value}))
    }
    return(
        <div>
            Name:
            <input 
                name="imgURL"
                value={newUglyThing.imgURL}
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
            <button onClick={() => context.addUglyThing(newUglyThing)}>Submit</button>
        </div>
    )
}

export default Form