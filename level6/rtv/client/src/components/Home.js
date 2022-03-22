import React, { useContext, useEffect } from "react"
import IssueFeed from "./IssueFeed.js"
import { UserContext } from "../context/UserProvider.js"

export default function Home(){
    const { issueFeedState, getAllIssues } = useContext(UserContext)

    useEffect(() => {
        getAllIssues()
    })
    return(
        <>
            <IssueFeed issues={issueFeedState} />
        </>
    )
}