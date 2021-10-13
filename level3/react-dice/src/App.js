import React, {Component} from "react"
import Dice from "./Dice"
import dice from "./dice.wav"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            num1: {
                number: 0,
                isLocked: false,
            },
            num2: {
                number: 0,
                isLocked: false,
            },
            num3: {
                number: 0,
                isLocked: false,
            },
            num4: {
                number: 0,
                isLocked: false,
            },
            num5: {
                number: 0,
                isLocked: false,
            },
            count: 0
        }
        this.randomNum = this.randomNum.bind(this)
        this.selectDice1 = this.selectDice1.bind(this)
        this.selectDice2 = this.selectDice2.bind(this)
        this.selectDice3 = this.selectDice3.bind(this)
        this.selectDice4 = this.selectDice4.bind(this)
        this.selectDice5 = this.selectDice5.bind(this)

    }
    randomNum(){
        const randomNum1 = Math.floor(Math.random() * 6 + 1)
        if(this.state.num1.isLocked === false){
            this.setState(prevState => {
            return {
                num1: {
                number: randomNum1,
                isLocked: prevState.num1.isLocked,
                }
            }
            }) 
        } 
        const randomNum2 = Math.floor(Math.random() * 6 + 1)
        if(this.state.num2.isLocked === false){
            this.setState(prevState => {
            return {
                num2: {
                    number: randomNum2,
                    isLocked: prevState.num2.isLocked,
                }
            }
            }) 
        }
        const randomNum3 = Math.floor(Math.random() * 6 + 1)
        if(this.state.num3.isLocked === false){
            this.setState(prevState => {
            return {
                num3: {
                    number: randomNum3,
                    isLocked: prevState.num3.isLocked,
                }
            }
            }) 
        } 
        const randomNum4 = Math.floor(Math.random() * 6 + 1)
        if(this.state.num4.isLocked === false){
            this.setState(prevState => {
            return {
                num4: {
                    number: randomNum4,
                    isLocked: prevState.num4.isLocked,
                }
            }
            }) 
        } 
        const randomNum5 = Math.floor(Math.random() * 6 + 1)
        if(this.state.num5.isLocked === false){
            this.setState(prevState => {
            return {
                num5: {
                    number: randomNum5,
                    isLocked: prevState.num5.isLocked,
                }
            }
            }) 
        }
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
        if(this.state.count > 2){
            this.setState({
                num1: {
                    number: 0,
                    isLocked: false,
                },
                num2: {
                    number: 0,
                    isLocked: false,
                },
                num3: {
                    number: 0,
                    isLocked: false,
                },
                num4: {
                    number: 0,
                    isLocked: false,
                },
                num5: {
                    number: 0,
                    isLocked: false,
                },
                count: 0
            })
        }
        new Audio(dice).play()
    }
    selectDice1(){
        if(this.state.num1.isLocked){
            this.setState(prevState => {
                return {
                    num1: {
                    number: prevState.num1.number,
                    isLocked: false,
                    }
                }
            }) 
        } else {
            this.setState(prevState => {
                return {
                    num1: {
                    number: prevState.num1.number,
                    isLocked: true,
                    }
                }
            })
        }
    }
    selectDice2(){
        if(this.state.num2.isLocked){
            this.setState(prevState => {
                return {
                    num2: {
                        number: prevState.num2.number,
                        isLocked: false,
                    }
                }
            }) 
        } else {
            this.setState(prevState => {
                return {
                    num2: {
                        number: prevState.num2.number,
                        isLocked: true,
                    }
                }
            })
        }
    }
    selectDice3(){
        if(this.state.num3.isLocked){
            this.setState(prevState => {
                return {
                    num3: {
                        number: prevState.num3.number,
                        isLocked: false,
                    }
                }
            }) 
        } else {
            this.setState(prevState => {
                return {
                    num3: {
                        number: prevState.num3.number,
                        isLocked: true,
                    }
                }
            })
        }
    }
    selectDice4(){
        if(this.state.num4.isLocked){
            this.setState(prevState => {
                return {
                    num4: {
                        number: prevState.num4.number,
                        isLocked: false,
                    }
                }
            }) 
        } else {
            this.setState(prevState => {
                return {
                    num4: {
                        number: prevState.num4.number,
                        isLocked: true,
                    }
                }
            })
        }
    }
    selectDice5(){
        if(this.state.num5.isLocked){
            this.setState(prevState => {
                return {
                    num5: {
                        number: prevState.num5.number,
                        isLocked: false,
                    }
                }
            }) 
        } else {
            this.setState(prevState => {
                return {
                    num5: {
                        number: prevState.num5.number,
                        isLocked: true,
                    }
                }
            })
        }
    }
    render(){
        return (
            <div>
                <h1>Dice React</h1>
                <div className="dice-box">
                    <Dice ref={this.DiceElement} num={this.state.num1.number} />
                    <Dice ref={this.DiceElement} num={this.state.num2.number} />
                    <Dice ref={this.DiceElement} num={this.state.num3.number} />
                    <Dice ref={this.DiceElement} num={this.state.num4.number} />
                    <Dice ref={this.DiceElement} num={this.state.num5.number} />
                    <button className={this.state.num1.isLocked && "toggle"} onClick={this.selectDice1} id="dice1">Dice 1</button>
                    <button className={this.state.num2.isLocked && "toggle"} onClick={this.selectDice2} id="dice2">Dice 2</button>
                    <button className={this.state.num3.isLocked && "toggle"} onClick={this.selectDice3} id="dice3">Dice 3</button>
                    <button className={this.state.num4.isLocked && "toggle"} onClick={this.selectDice4} id="dice4">Dice 4</button>
                    <button className={this.state.num5.isLocked && "toggle"} onClick={this.selectDice5} id="dice5">Dice 5</button>

                </div>
                <br></br>
                <div className="roll-button-div">
                    <button className="roll-button" onClick={this.randomNum}>Roll!</button>
                    <h3>Rolls Left: {3 - this.state.count}</h3>
                </div>
            </div>
        )
    }
}


export default App