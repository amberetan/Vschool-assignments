import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "../context/UserContext"
import PastTrip from "./PastTrip"
import TripForm from "./TripForm"

function MyTrip(){
    const {trips, getTrips, addTrip, userState} = useContext(UserContext)

    useEffect(() => {
        getTrips()
    })

    
    return(
        <div className="tripsPage">
            <div>
                <h1>Trips</h1>
                <TripForm 
                    btnText="Add Trip"
                    submit={addTrip}
                />
            </div>
            <div>
                <h1>Past Trips</h1>
                {trips.map(trip => 
                    <PastTrip 
                        {...trip}
                        key={trip._id}
                    />
                )}
            </div>
        </div>
    )
}

export default MyTrip