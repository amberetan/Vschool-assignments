import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import TripForm from "./TripForm"

export default function PastTrip(props){
    const {
        title,
        location,
        lodging,
        date,
        activities,
        good,
        bad,
        rememberNextTime,
        _id
    } = props

    const {editTrip } = useContext(UserContext)

    const [toggle, setToggle] = useState(true)

    function handleEdit(){
        setToggle(prev => !prev)
    }
    function handleDelete(){
        
    }
    return(
        <div>
            {toggle ? 
            <>
                <h1>{title} - {date}</h1>
                <p>Location(s): {location}</p>
                <p>Lodging: {lodging}</p>
                <p>Activities: {activities}</p>
                <p>The Good: {good}</p>
                <p>The Bad: {bad}</p>
                <p>Remember for Next Time: {rememberNextTime}</p>
                <button onClick={handleEdit}>Edit Trip</button>
                <button onClick={handleDelete}>Delete</button>
            </>
            :
            <>
                <TripForm 
                    {...props}
                    btnText="Submit Edits"
                    toggle={handleEdit}
                    submit={editTrip}
                    _id={_id}
                />
            </>}

        </div>
    )
}