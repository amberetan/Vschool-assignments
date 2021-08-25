import React from "react"
import Pet from "./Pet"

function Friend(props){    
    return(
        <div className="friend-card">
            <h1>{props.name}, {props.age}</h1>
            <h2>Pets: {props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)}</h2>
        </div>
    )
}


export default Friend