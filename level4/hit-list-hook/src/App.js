import React, {useState, useEffect} from "react"
import HitList from "./HitList"

function App() {
    const [hitList, setHitList] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => { 
                setHitList(data)
            })
        }, [])

    const hitList1 = hitList.map((item, index) => <HitList name={item.name} image={item.image} key={index}/>)
    return(
        <div>
            <h1>Don Corleone's Hit List</h1>
                
            <div className="hitListGrid">
                {hitList1}
            </div>
        </div>
    )
}

export default App