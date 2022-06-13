import React from "react"
import PastTrip from "./PastTrip"

function MyTrip(){
    return(
        <div className="tripsPage">
            <div>
                <h1>Trips</h1>
                <form className="tripForm">
                    Trip Nickname:
                    <input 
                        placeholder="My Trip"
                        name="title"
                        value=""
                        type="text"
                    />
                    <br/>
                    Dates:
                    <input 
                        placeholder="Summer 2022"
                        name="date"
                        value=""
                        type="text" 
                    />
                    <br/>
                    Park(s) to Visit:
                    <input 
                        placeholder="Park Names" 
                        name="location"
                        value=""
                        type="text"
                    />
                    <br/>
                    Lodging: 
                    <input 
                        placeholder="camping, motel, airbnb..." 
                        name=""
                        value=""
                        type="text"
                    />
                    <br/>
                    Activities: 
                    <textarea 
                        placeholder="Visitor's center, hikes, fishing..." 
                        name="activities"
                        value=""
                        type="text"
                    />
                    <br/>
                    Trip Completed?
                    <input
                        type="checkbox"
                        name="complete"
                    />
                    Good: 
                    <textarea
                        placeholder="What was great about your trip?"
                        name="good"
                    />
                    Bad: 
                    <textarea
                        placeholder="What was NOT-so-great about your trip?"
                        name="bad"
                    />
                    Remember for Next Time:
                    <textarea
                        placeholder="What do you want to remember on your next visit?"
                        name="rememberNextTime"
                    />
                    Packing List:
                    <input />
                    <button>add</button>
                </form>
            </div>
            <div>
                <h1>Past Trips</h1>
                <PastTrip />
            </div>
        </div>
    )
}

export default MyTrip