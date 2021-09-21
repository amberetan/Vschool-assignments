import React, {Component} from "react"

class Square extends Component {
    render(){
        let backgroundColors = {
            backgroundColor: this.props.bgColors
        }
        return(
            <div style={backgroundColors} className="square">

            </div>
        )
    }
}


export default Square