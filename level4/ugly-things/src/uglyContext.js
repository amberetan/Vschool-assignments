import React, {useState} from "react"
const UglyContext = React.createContext()

function UglyContextProvider(props){
    const [uglyThing, setUglyThing] = useState({imgURL: "test", title: "test", description: "test"})
    const [uglyList, setUglyList] = useState([])

    
    
    function addUglyThing(n){
        setUglyList(prevUglyList => [n, ...prevUglyList])
        console.log(uglyList)
    }

    return (  
        <UglyContext.Provider value={{uglyThing, uglyList, addUglyThing}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContextProvider, UglyContext}

