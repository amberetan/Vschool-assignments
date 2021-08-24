import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"

function App(){
    const vacationList = vacationSpots.map(spot => <Card key={spot.id} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    return(
        <div>
            <header>Vacation Spots</header>
            <div className="card-grid">
                {vacationList}
            </div>
        </div>
    )
}

export default App