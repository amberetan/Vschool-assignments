import React from "react"

function MyTrip(){
    return(
        <div>
            Trip Nickname:<input placeholder="My Trip"/>
            <br/>
            Dates:<input placeholder="Summer 2022" />
            <br/>
            Park(s) to Visit:<input placeholder="Park Names" />
            <br/>
            Lodging: <input placeholder="camping, motel, airbnb..." />
            <br/>
            Activities: <textarea placeholder="Visitor's center, hikes, fishing..." />
            <br/>
            Packing List:
            <form>
                <input />
                <button>add</button>
            </form>
        </div>
    )
}

export default MyTrip