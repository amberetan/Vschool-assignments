import React from "react"

function Square(props) {
    let backgroundColors = {
        backgroundColor: props.bgColors
    }
    return(
        <div style={backgroundColors} className="square">

        </div>
    )
}

export default Square