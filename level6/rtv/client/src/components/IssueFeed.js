import React from "react"
// import { UserContext } from "../context/UserProvider.js"
import Issue from "./Issue.js"

function IssueFeed(props){
    const { issues } = props
    return(
        <>
            <h2>All Posted Issues:</h2>
            {issues.map(issue => <Issue {...issue} key={issue._id}/>)}
        
        </>
    )
}

export default IssueFeed