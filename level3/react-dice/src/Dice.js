import React, {Component} from "react"

class Dice extends Component {

    render(){
        const randomId = Math.random() * 10
        return(
            <div  id={randomId} className={this.props.num===0 && "nodice" || this.props.num===1 && "dice1" || this.props.num===2 && "dice2" || this.props.num===3 && "dice3" || this.props.num===4 && "dice4" || this.props.num===5 && "dice5" || this.props.num===6 && "dice6"}>
                <h2></h2>
            </div>
        )
    }
}


export default Dice