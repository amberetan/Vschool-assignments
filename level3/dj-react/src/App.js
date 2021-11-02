import React, {Component} from "react"
import Square from "./Square"
import samba from "./audioclips/samba.wav"
import techno from "./audioclips/techno.wav"
import cowbell from "./audioclips/cowbell.wav"
import crashbell from "./audioclips/crashbell.wav"
import scratch3 from "./audioclips/scratch3.wav"
import percussion from "./audioclips/highhatbeat.wav"
import scratch from "./audioclips/scratch.wav"
import technohit from "./audioclips/technohit.wav"
import drumloop from "./audioclips/drumloop.wav"

class App extends Component {
    constructor(){
        super()
        this.state ={
            colors: ["white", "white", "white", "white"]
        }
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.blueLeft = this.blueLeft.bind(this)
        this.blueRight = this.blueRight.bind(this)
        this.bigDJ1 = this.bigDJ1.bind(this)
        this.bigDJ2 = this.bigDJ2.bind(this)
        this.bigDJ3 = this.bigDJ3.bind(this)
        this.bigDJ4 = this.bigDJ4.bind(this)
        this.checker = this.checker.bind(this)
    }
    
    smallTimeDJ(){
        this.setState(prevState => {
            if(prevState.colors[0] === "white"){
                return {
                    colors: ["black", "black", "black", "black"]
                }
            }
            else {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
        })
        new Audio(technohit).play()
    }
    partyDJ(){
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
        new Audio(cowbell).play()
    }

    blueLeft(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })
        new Audio(scratch3).play()
    }

    blueRight(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
        new Audio(crashbell).play()
    }

    bigDJ1(){
        this.setState(prevState => {
            return {
                colors: ["skyblue", prevState.colors[1], prevState.colors[2], prevState.colors[3]]
            }
        })
        new Audio(percussion).play()
    }
    bigDJ2(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], "green", prevState.colors[2], prevState.colors[3]]
            }
        })
        new Audio(techno).play()
    }
    bigDJ3(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "orange", prevState.colors[3]]
            }
        })
        new Audio(samba).play()
    }
    bigDJ4(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "yellow"]
            }
        })
        new Audio(drumloop).play()
    }
    checker(){
        this.setState(prevState => {
            if(prevState.colors[0] === "white"){
                return {
                colors: ["black", "white", "white", "black" ]
                }
            } else {
                return {
                    colors: ["white", "black", "black", "white" ]
                }
            }
        })
        new Audio(scratch).play()
    }
    render() {
        const colorSquare = this.state.colors.map(color => <Square bgColors={color} />)
        return(
            <div>
                <h1>DJ React</h1>
                <br></br>
                <div className="squareGrid">
                    {colorSquare}
                </div>
                <br></br>
                <div className="buttonsDiv">
                    <div className="smallButtons">
                        <button onClick={this.smallTimeDJ} className="smallTime">B/W</button>
                        <button onClick={this.partyDJ} className="partyDJ">Purp</button>
                        <button onClick={this.bigDJ1} className="bigDJ1">BDJ 1</button>
                        <button onClick={this.bigDJ2} className="bigDJ2">BDJ 2</button>
                        <button onClick={this.blueLeft} className="blueLeft">Bl L</button>
                        <button onClick={this.blueRight} className="blueRight">Bl R</button>
                        <button onClick={this.bigDJ3} className="bigDJ3">BDJ 3</button>
                        <button onClick={this.bigDJ4} className="bigDJ4">BDJ 4</button>
                    </div>
                    <button onClick={this.checker} className="checker">Check</button>
                </div>
            </div>
        )
    }
}

export default App