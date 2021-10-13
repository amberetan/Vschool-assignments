import React, {Component} from "react"
import PastName from"./PastName"

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            nameList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addToList = this.addToList.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    addToList(e){
        e.preventDefault()
        this.setState(prevState =>{
            return({
                name: "",
                nameList: [
                    ...prevState.nameList,
                    {name: this.state.name}
                ]
            })
        })
    }

    render(){
        const nameLists = this.state.nameList.map(names => <PastName name={names.name} />)
        return(
            <form>
                <div className="box"><h1>Name Entry</h1>
                    <input
                        id="nameInput"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="First and Last Name"
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <button id="add" onClick={this.addToList}>Submit</button>
                   
                </div>
                <br /><br />
                <div className="box">
                    <h2>Name to be entered:</h2> 
                    <h3> {this.state.name}</h3>
                    
                </div>
                <br /><br />
                <div className="box">
                    <h2>Names already entered:</h2>
                    <ol id="nameList">
                        {nameLists}
                    </ol>
                </div>
            </form>
        )
    }
}

export default App