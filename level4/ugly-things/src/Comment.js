import React from "react"

function Comment(props){
    return(
        <li>
            <p>{props.content}</p>
            <button onClick={() => props.delete(props.id)}>X</button>
        </li>
    )
}

export default Comment