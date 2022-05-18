import React, {useContext, useEffect} from "react"
import { UserContext } from "../context/UserProvider.js"
import Issue from "./Issue.js"

function IssueFeed(){
    const { issueFeedState, getAllIssues } = useContext(UserContext)
    const sortedIssues = issueFeedState.sort(function(a,b){
        let x = a.voteTotal
        let y = b.voteTotal
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
    })
    const issueArray = sortedIssues.map((issue, index) => {
        return(
            <div key={`${issue.title}_${issue._id}`}  className="issue-feed">
                <div key={issue._id}>Ranking: {issue.voteTotal}</div>
                <Issue {...issue} key={index}/>
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