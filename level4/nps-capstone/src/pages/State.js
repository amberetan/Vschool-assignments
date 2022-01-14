import React, {useContext} from "react"
import {useParams, Link} from "react-router-dom"
import {NpsContext} from "../npsContext"
import stateInfo from "./stateInfo"

function State(){
    const {allParks} = useContext(NpsContext)
    const {stateId} = useParams()
    const thisState = stateInfo.find(state => (state._id === stateId))
    const theseParks = allParks.filter(parks => parks.states === stateId)
    const parksList = theseParks.map(park => <li key={park.id}><Link to={`/park/${stateId}/${park.parkCode}`}>{park.fullName}</Link></li>)
    return(
        <>
            <h1>Explore Parks in {thisState.name}:</h1>
            <div className="state-page">
                <div className="stateImg">
                    
                    <img src={thisState.img_url} alt={`A map of ${thisState.name}`} width="500px"></img>
                </div>
                <div>
                    <h2>List of Parks and Historic Sites:</h2>
                    <ul className="parks-list">
                        {parksList}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default State