import React from "react"
import Friend from "./Friend"
import friendsList from "./friendsList"

function App(){
    const friendList = friendsList.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets} />)

    return(
        <div className="body">
            <h1 className="title">My Friends & Their Pets</h1>
            <div className="friend-list">{friendList}</div>
        </div>
    )
}

export default App
