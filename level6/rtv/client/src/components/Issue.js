import React, { useContext, useState } from "react"
import IssueForm from "./IssueForm"
import {UserContext} from "../context/UserProvider.js"

function Issue(props){
    const {title, description, _id} = props
    const { deleteIssue, editIssue } = useContext(UserContext)
    const [toggle, setToggle] = useState(true)

    function handleDelete(e){
        
    }
    return(
        <div>
            {toggle ? 
            <>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={handleDelete}>X</button>
                <button onClick={() => setToggle(prevToggle => !prevToggle)}>edit</button>
            </>
            :
            <>
                <IssueForm 
                    title={title}
                    description={description}
                    id={_id}
                    btnText="Submit Edits"
                    submit={editIssue}
                    
                /> 
                <button onClick={() => setToggle(prevToggle => !prevToggle)}>close</button> 
            </>
            }
        </div>
    )
}

export default Issue