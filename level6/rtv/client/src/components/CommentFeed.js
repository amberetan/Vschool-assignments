import React, { useContext, useState } from "react"
import { CommentContext } from "../context/CommentProvider.js"
import Comment from "./Comment.js"

function CommentFeed(props){
    const { commentFeed, addComment } = useContext(CommentContext)
    const initInputs = {
        comment: ""
    }
    const [newComment, setNewComment] = useState(initInputs)
    
    function handleChange(e){
        const {name, value} = e.target
        setNewComment(prevNewComment => ({
          ...prevNewComment,
          [name]: value
        }))
        console.log(newComment)
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(props.issueId, newComment)
        setNewComment(initInputs)
    }
    // const thisIssue = issueFeedState.find(issue => issue._id===props._id)
    return(
        <div className="comment-feed">
            <div className="add-comment">
                <p>Leave a comment: </p>
                <input 
                    name="comment"
                    placeholder="enter comment here"
                    value={newComment.comment}
                    type="text"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add Comment</button>
            </div>

            {commentFeed.map(comment => {
                if(comment.issue===props.issueId) {
                return <Comment {...comment} key={comment._id} />
                }
                return null})
            }
        </div>
    )
}

export default CommentFeed