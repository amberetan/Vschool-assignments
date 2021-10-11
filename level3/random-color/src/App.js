import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color: [0,1,2,3,4,5,6,7,8]
        }
    }
    componentDidMount(){
        
    }


    render(){
        const colors = this.state.color.map(color => <Color />)
        return(
            <div>

            </div>
        )
    }
}