import React from "react"

function Uglything(props){
    return(
        <li>
            <img src={props.imgURL} alt="ugly pic"></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </li>
    )
}

export default Uglything