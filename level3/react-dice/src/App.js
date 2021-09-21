import React, {Component} from "react"
import Dicebox from "./Dicebox"

class App extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.randomNum = this.randomNum.bind(this)
    }
    randomNum(){
        const randomNum1 = Math.floor(Math.random() * 6 + 1)
        const randomNum2 = Math.floor(Math.random() * 6 + 1)
        const randomNum3 = Math.floor(Math.random() * 6 + 1)
        const randomNum4 = Math.floor(Math.random() * 6 + 1)
        const randomNum5 = Math.floor(Math.random() * 6 + 1)
        this.setState(prevState => {
                return {
                    num1: randomNum1,
                    num2: randomNum2,
                    num3: randomNum3,
                    num4: randomNum4,
                    num5: randomNum5
                }
            }
        )
    }
    render(){
        return (
            <div>
                <h1>Dice React</h1>
                <div className="dice-box">
                    <Dicebox num={this.state.num1}/>
                    <Dicebox num={this.state.num2}/>
                    <Dicebox num={this.state.num3}/>
                    <Dicebox num={this.state.num4}/>
                    <Dicebox num={this.state.num5}/>
                </div>
                <div className="roll-button">
                    <button onClick={this.randomNum} >Roll!</button>
                </div>
            </div>
        )
    }
}


export default App