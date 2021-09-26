import React, {Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: ""
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
        let li = document.createElement("li")
        let nameInput = document.getElementById("nameInput")
        li.textContent = nameInput.value
        document.getElementById("nameList").appendChild(li)
    }

    render(){
        return(
            <form>
                <h1>Name Entry</h1>
                <input
                    id="nameInput"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="First and Last Name"
                    onChange={this.handleChange}
                />
                <br />
                <h2>Name to be entered: {this.state.name}</h2>
                <br />
                <button id="add" onClick={this.addToList}>Submit</button>
                <br />
                <h2>Names already entered</h2>
                <ol id="nameList">

                </ol>
            </form>
        )
    }
}

export default App