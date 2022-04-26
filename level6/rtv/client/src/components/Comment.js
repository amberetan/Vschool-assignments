import React, { useContext } from "react"
import { CommentContext } from "../context/CommentProvider"
import { UserContext } from "../context/UserProvider"

function Comment(props){
    const { comment, _id } = props
    const { deleteComment } = useContext(CommentContext)
    const { user } = useContext(UserContext)
    let deleteBtn
    if(user._id === props.user){
        deleteBtn = 
            <>
                <button onClick={() => deleteComment(_id)} className="delete-comment-btn">X</button>
            </>
    }
    return(
        <div className="comment">
            <p>{comment}</p>
            {deleteBtn}
        </div>
    )
}

export default Comment