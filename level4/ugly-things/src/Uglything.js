// import axios from "axios"
import React, {useContext} from "react"
// import {UglyContext} from "./uglyContext"

function Uglything(props){
    // const context = useContext(UglyContext)
    // function deleteUglyThing(){
    //     axios.delete(`https://api.vschool.io/ambertan/thing/${}`)
    // }
    return(
        <li>
            <img src={props.imgUrl} alt="ugly pic" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {/* <button onClick={deleteUglyThing}>Delete</button> */}
        </li>
    )
}

export default Uglything