import React, {useState, useEffect} from "react"
import Uglything from "./Uglything"
const UglyContext = React.createContext()
const axios = require('axios').default

function UglyContextProvider(props){
    const [uglyList, setUglyList] = useState([])

    useEffect(() => {
        fetch("https://api.vschool.io/ambertan/thing")
            .then(response => response.json())
            .then(data => { 
                setUglyList(data)
            })
        }, [])
    function addUglyThing(n){
        axios.post("https://api.vschool.io/ambertan/thing", n)
        setUglyList(prevUglyList => [...prevUglyList, n])
    }

    // function deleteUglyThing(data){
    //     axios.delete("https://api.vschool.io/ambertan/thing/" + data._id)
    //             .then(response => console.log("Your ugly thing was succesfully deleted"))
    //             .catch(error => console.log(error))
    // }

    return (  
        <UglyContext.Provider value={{uglyList, addUglyThing}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContextProvider, UglyContext}

