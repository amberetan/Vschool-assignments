import React, {useContext, useEffect} from "react"
import { UserContext } from "../context/UserProvider.js"
import Issue from "./Issue.js"

function IssueFeed(){
    const { issueFeedState, getAllIssues } = useContext(UserContext)
    const issueArray = issueFeedState.map((issue, index) => {
        const voteTotal = issue.upVoteUsers.length-issue.downVoteUsers.length
        return(
            <div key={`${issue.title}_${issue._id}`}  className="issue-feed">
                <div key={issue._id}>Ranking: {voteTotal}</div>
                <Issue {...issue} key={index} votes={voteTotal}/>
            </div>
        )
    })
useEffect(()=>{
    getAllIssues()
}, [])

    return(
        <div>
            <h2 className="issue-feed-title">All Posted Issues:</h2>
            {issueArray}
        </div>
    )
} 

export default IssueFeed