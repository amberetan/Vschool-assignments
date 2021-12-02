import React, {useContext} from "react"
import {UglyContext}from "./uglyContext"
import Uglything from "./Uglything"
import Form from "./Form"

function App(){
    const context = useContext(UglyContext)
    const uglyThingList = context.uglyList.map(item => <Uglything 
        imgUrl={item.imgUrl} 
        title={item.title} 
        description={item.description} 
        key={item.title+item.description}
        id={item._id}
    />)
    return(
        <>
            <button onClick={() => context.checkList()}>console log list</button>
            <Form />
            <ul>
                {uglyThingList}
            </ul>
        </>
    )
}

export default App