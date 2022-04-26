import React, {useContext, useState} from "react"
import { UserContext } from "../context/UserProvider.js"
import Issue from "./Issue.js"
import IssueForm from "./IssueForm.js"

export default function Profile(){
    const { user: {username}, userIssues, addIssue } = useContext(UserContext)
    const [toggle, setToggle] = useState(false)

    function handleToggle(){
        setToggle(prev => !prev)
    }

    return(
        <div>
            <h2>{username}'s Posted Issues:</h2>
            {toggle ? 
                <div className="issueform">
                    <IssueForm  
                        submit={addIssue}
                        btnText="Add Issue"
                        toggle={handleToggle}
                    />
                    <button className="close-btn" onClick={handleToggle}>close</button>
                </div> 
            : 
                <div className="add-issue-btn" >
                    <button onClick={handleToggle}>Add an issue:</button>
                </div>
            }

            {userIssues.map(issue => <Issue {...issue} key={issue._id} />)}
        </div>
    )
}