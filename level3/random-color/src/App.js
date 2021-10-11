import React from "react"
import Color from "./Color"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    return({
                        color: ["#" + data.colors[0].hex, ...prevState.color]
                    })
                })
            })
            console.log(this.state.color)
    }


    render(){
        const colors = this.state.color.map((color,index) => <Color backgroundColor={color} key={index}/>)
        return(
            <main>
                <button onClick={this.handleClick}>Random Color:</button>
                <div className="colorGrid">
                    {colors}
                </div>
            </main>
        )
    }
}

export default App