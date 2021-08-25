import React from "react"

function Pet(props){
    return(
        <ul className="pet-list">
            <li>Name: {props.name[0].toUpperCase()+ props.name.slice(1)}</li>
            <li>Breed: {props.breed[0].toUpperCase()+ props.breed.slice(1)}</li>
        </ul>
    )
}

export default Pet