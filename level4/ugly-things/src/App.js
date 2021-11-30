import React, {useContext} from "react"
import {UglyContext}from "./uglyContext"
import Uglything from "./Uglything"
import Form from "./Form"

function App(){
    const context = useContext(UglyContext)
    const uglyThingList = context.uglyList.map(item => <Uglything imgURL={item.imgURL} title={item.title} description={item.description} key={item.title+item.description}/>)
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