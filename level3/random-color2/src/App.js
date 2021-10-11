import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            color: ""
        }
    }
    componentDidMount(){
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    color: "#" + data.colors[0].hex
                })
                console.log(data)
                console.log(this.state)
            })
    }

    render(){
        return(
            <div style={{backgroundColor: this.state.color}} id="main">
            
            </div>
        )
    }
}

export default App