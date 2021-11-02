import React, {useState} from "react"
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

function App() {
    const [colors, setColors] = useState(["white","white","white","white"])

    function smallTime(){
        setColors(prevColor => {
            if(prevColor[0] === "white"){
                return ["black","black","black","black"]
            }
            else{
                return ["white", "white", "white", "white"]
            }
        })
        new Audio(technohit).play()
    }
    function partyDJ(){
        setColors(prevColor => ["purple", "purple", prevColor[2], prevColor[3]])
        new Audio(cowbell).play()
    }

    function blueLeft(){
        setColors(prevColor => [prevColor[0], prevColor[1], "blue", prevColor[3]])
        new Audio(scratch3).play()
    }

    function blueRight(){
        setColors(prevColor => [prevColor[0], prevColor[1], prevColor[2], "blue"])
        new Audio(crashbell).play()
    }

    function bigDJ1(){
        setColors(prevColor => ["skyblue", prevColor[1], prevColor[2], prevColor[3]])
        new Audio(percussion).play()
    }
    function bigDJ2(){
        setColors(prevColor => [prevColor[0], "green", prevColor[2], prevColor[3]])
        new Audio(techno).play()
    }
    function bigDJ3(){
        setColors(prevColor => [prevColor[0], prevColor[1], "orange", prevColor[3]])
        new Audio(samba).play()
    }
    function bigDJ4(){
        setColors(prevColor => [prevColor[0], prevColor[1], prevColor[2], "yellow"])
        new Audio(drumloop).play()
    }
    function checker(){
        setColors(prevColor => {
            if(prevColor[0] === "white"){
                return ["black", "white", "white", "black" ]
            }
            else {
                return ["white", "black", "black", "white" ]
            }
        })
        new Audio(scratch).play()
    }

    const squares = colors.map(color => <Square bgColors={color} />)
    return(
        <div>
            <h1>DJ React with Hooks</h1>
            <br />
            <div className="squareGrid">
                {squares}
            </div>
            <br/>
            <div className="buttonsDiv">
                    <div className="smallButtons">
                        <button onClick={smallTime} className="smallTime">B/W</button>
                        <button onClick={partyDJ} className="partyDJ">Purp</button>
                        <button onClick={bigDJ1} className="bigDJ1">BDJ 1</button>
                        <button onClick={bigDJ2} className="bigDJ2">BDJ 2</button>
                        <button onClick={blueLeft} className="blueLeft">Bl L</button>
                        <button onClick={blueRight} className="blueRight">Bl R</button>
                        <button onClick={bigDJ3} className="bigDJ3">BDJ 3</button>
                        <button onClick={bigDJ4} className="bigDJ4">BDJ 4</button>
                    </div>
                    <button onClick={checker} className="checker">Check</button>
                </div>
        </div>
    )
}

export default App