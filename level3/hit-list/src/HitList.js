import React from "react"

function HitList(props){
    return(
        <div className="hitItem">
            <img src={props.image} alt={props.name}></img>
            <h3>{props.name}</h3>
        </div>
    )
    
}

export default HitList