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
            .then(response => setUglyList(prevUglyList => [...prevUglyList, newUglyThing]))
            .catch(error => console.log(error))
    }

    function deleteUglyThing(id){
        axios.delete(`https://api.vschool.io/ambertan/thing/${id}`)
            .then(response => setUglyList(prevUglyList => prevUglyList.filter(thing => id !== thing._id)))
            .catch(error => console.log(error))
    }
    function editUglyThing(id, edit){
        axios.put(`https://api.vschool.io/ambertan/thing/${id}`, edit)
        .then(response => setUglyList(prevUglyList => prevUglyList.map(thing => id === thing._id ? edit : thing)))
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

