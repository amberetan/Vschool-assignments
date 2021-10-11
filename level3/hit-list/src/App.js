import React, {Component} from "react"
import HitList from "./HitList"

class App extends Component{
    constructor(){
        super()
        this.state = {
            hitList: []
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => { 
                this.setState({
                    hitList: data
                })

            })

        
    
    }
    render(){
        const hitList1 = this.state.hitList.map((item, index) => <HitList name={item.name} image={item.image} key={index}/>)
        return(  
            <div>
                <h1>Don Corleone's Hit List</h1>
                
                <div className="hitListGrid">
                    {hitList1}
                </div>
            </div>
        )
    }
}

export default App