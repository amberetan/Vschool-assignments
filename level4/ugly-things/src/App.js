import React, {useContext} from "react"
import {UglyContext}from "./uglyContext"
import Uglything from "./Uglything"
import Form from "./Form"

function App(){
    fetch("https://api.vschool.io/ambertan/thing")
    .then(response => response.json())
    .then(data => {
        const uglyThingsList = data.map(thing => <Uglything 
            id={thing._id} 
            imgUrl={thing.imgUrl} 
            title={thing.title} 
            description={thing.description} 
            key={thing.title+thing.description}
        />)
    })
    const context = useContext(UglyContext)
    // const uglyThingList = context.uglyList.map(item => <Uglything imgUrl={item.imgUrl} title={item.title} description={item.description} key={item.title+item.description}/>)
    return(
        <>
            <Form />
            <ul>
                {uglyThingList}
            </ul>
        </>
    )
}

export default App