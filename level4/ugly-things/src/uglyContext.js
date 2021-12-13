import React, {useState, useEffect} from "react"
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
    function addUglyThing(newUglyThing){
        axios.post("https://api.vschool.io/ambertan/thing", newUglyThing)
            .then(response => console.log("Your ugly thing successfully posted", response.data))
            .catch(error => console.log(error))
            .finally(
                fetch("https://api.vschool.io/ambertan/thing")
                    .then(response => response.json())
                    .then(data => { 
                        setUglyList(data)
            }))
        
    }

    function deleteUglyThing(id){
        axios.delete(`https://api.vschool.io/ambertan/thing/${id}`)
            .then(response => console.log("Your ugly thing was succesfully deleted"))
            .catch(error => console.log(error))
    }
    function editUglyThing(id, edit){
        axios.put(`https://api.vschool.io/ambertan/thing/${id}`, edit)
        .then(response => console.log("Your ugly thing was successfully edited"))
        .catch(error => console.log(error))
    }
    
    function checkList(){
        console.log(uglyList)
    }
    

    return (  
        <UglyContext.Provider value={{uglyList, checkList, deleteUglyThing, addUglyThing, editUglyThing}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContextProvider, UglyContext}

