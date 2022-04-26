import React, { useContext, useState } from "react"
import IssueForm from "./IssueForm"
import {UserContext} from "../context/UserProvider.js"
import CommentFeed from "./CommentFeed.js"

function Issue(props){
    const {title, description, _id, upVoteUsers, downVoteUsers } = props
    const { deleteIssue, editIssue, handleUpVotes, handleDownVotes, user  } = useContext(UserContext)
    const [toggle, setToggle] = useState(true)

    function handleToggle(){
        setToggle(prevToggle => !prevToggle)
    }
    let userEdit
    if(user._id === props.user){
        userEdit =  
            <>
                <button className="user-dlt-btn" onClick={() => deleteIssue(_id)}>X</button>
                <button className="user-edit-btn" onClick={handleToggle}>edit</button>
            </>
    }

    return(
        <div className="issue">
            {toggle ? 
            <div className="issue-main">
                <h3>{title}</h3>
                <h4>{description}</h4>
                {userEdit}
            </div>
            :
            <>
                <IssueForm 
                    title={title}
                    description={description}
                    _id={_id}
                    btnText="Submit Edits"
                    submit={editIssue}
                    toggle={handleToggle}
                    
                /> 
                <button onClick={handleToggle}>close</button> 
            </>
            }
            <hr></hr>
            <div className="vote-count-div">
                <button onClick={() => handleUpVotes(_id)} className="up-btn"></button>
                <p className="up-count">
                    {upVoteUsers.length}
                </p>
                <button onClick={() => handleDownVotes(_id)} className="down-btn"></button>
                <p className="down-count">{downVoteUsers.length}</p>
            </div>
            <CommentFeed issueId={_id}/>
        </div>
    )
}

export default Issue