import React from "react"

function Card(props){
    let cardBackground
    let dollarAmount

    if(props.timeToGo === "Spring"){
        cardBackground = "green"
    } else if(props.timeToGo === "Winter"){
        cardBackground = "blue"
    } else if(props.timeToGo === "Summer"){
        cardBackground = "yellow"
    } else if(props.timeToGo === "Fall"){
        cardBackground = "orange"
    }

    if(props.price <= 500){
        dollarAmount = "$"
    } else if(props.price > 500 && props.price <= 1000){
        dollarAmount = "$$"
    } else if(props.price > 1000){
        dollarAmount = "$$$"
    }

    return(
        <div style={{backgroundColor: cardBackground}}className="vacation-card">
            <h1>{props.place}</h1>
            <p>${props.price}</p>
            <p>Best Time To Go: {props.timeToGo}</p>
            <p className="dollar-amount">{dollarAmount}</p>
        </div>
    )
}

export default Card