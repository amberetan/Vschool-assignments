import React, {useContext, useState} from "react"
import { UserContext }from "../context/UserContext"

function TripForm(props) {
    const {trips, getTrips, addTrip, userState} = useContext(UserContext)

    const initTrip = {
        title: props.title || "",
        date: props.date || "",
        location: props.location || "",
        lodging: props.lodging || "",
        activities: props.activities || "",
        complete: false,
        good: props.good || "",
        bad: props.bad || '',
        rememberNextTime: props.rememberNextTime || "",
    }

    const [tripInfo, setTripInfo] = useState(initTrip)

    function handleChange(e){
        const {name, value} = e.target
        setTripInfo(prevState => ({...prevState, [name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(tripInfo, props._id)
        setTripInfo(initTrip)
        props.toggle()
    }
    return(
        <>
        <form className="tripForm" onSubmit={handleSubmit}>
                    Trip Nickname:
                    <input 
                        placeholder="My Trip"
                        name="title"
                        value={tripInfo.title}
                        type="text"
                        onChange={handleChange}
                    />
                    <br/>
                    Dates:
                    <input 
                        placeholder="Summer 2022"
                        name="date"
                        value={tripInfo.date}
                        type="text"
                        onChange={handleChange}
 
                    />
                    <br/>
                    Park(s) to Visit:
                    <input 
                        placeholder="Park Names" 
                        name="location"
                        value={tripInfo.location}
                        type="text"
                        onChange={handleChange}

                    />
                    <br/>
                    Lodging: 
                    <input 
                        placeholder="camping, motel, airbnb..." 
                        name="lodging"
                        value={tripInfo.lodging}
                        type="text"
                        onChange={handleChange}

                    />
                    <br/>
                    Activities: 
                    <textarea 
                        placeholder="Visitor's center, hikes, fishing..." 
                        name="activities"
                        value={tripInfo.activities}
                        type="text"
                        onChange={handleChange}

                    />
                    <br/>
                    Trip Completed?
                    <input
                        type="checkbox"
                        name="complete"
                        value={tripInfo.complete}
                        onChange={handleChange}

                    />
                    Good: 
                    <textarea
                        placeholder="What was great about your trip?"
                        name="good"
                        value={tripInfo.good}
                        onChange={handleChange}

                    />
                    Bad: 
                    <textarea
                        placeholder="What was NOT-so-great about your trip?"
                        name="bad"
                        value={tripInfo.bad}
                        onChange={handleChange}

                    />
                    Remember for Next Time:
                    <textarea
                        placeholder="What do you want to remember on your next visit?"
                        name="rememberNextTime"
                        value={tripInfo.rememberNextTime}
                        onChange={handleChange}

                    />
                    Packing List:
                    <input />
                    <button type="submit">{props.btnText}</button>
                </form>
        </>
    )
}

export default TripForm