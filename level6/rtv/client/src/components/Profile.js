import React, {useContext} from "react"
import { UserContext } from "../context/UserProvider.js"
import Issue from "./Issue.js"
import IssueForm from "./IssueForm.js"

export default function Profile(){
    const { user: {username}, userIssues, addIssue} = useContext(UserContext)
    return(
        <div>
            <h2>Add an issue to vote on:</h2>
            <IssueForm 
                submit={addIssue}
                btnText="Add Issue"
            />
            <h2>{username}'s Posted Issues:</h2>
            {userIssues.map(issue => <Issue {...issue} key={issue._id} />)}
        </div>
    )
}