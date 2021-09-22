import React, {Component} from "react"

class Dice extends Component {
    constructor(){
        super()
        this.state = {
            isLocked: false
        }
        this.clickSelect = this.clickSelect.bind(this)
    }
    clickSelect(){
        if(this.state.isLocked){
            this.setState({
                    isLocked: false
            })
        } else {
            this.setState({
                isLocked: true
            })
            
        }

    }
    render(){
        const randomId = Math.random() * 10
        // if(this.state.isLocked){
        //     document.getElementById(randomId).classList.add("toggle")
        // } else {
        //     document.getElementById(randomId).classList.remove('toggle')
        // }
        return(
            <div id={randomId} onClick={this.clickSelect}>
                <h2>{this.props.num}</h2>
            </div>
        )
    }
}


export default Dice