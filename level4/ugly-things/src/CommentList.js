import React, {useState} from "react"
import Comment from "./Comment.js"
const axios = require('axios').default

function CommentList(props){
    const [sick, setSick] = useState(false)
    const [sad, setSad] = useState(false)
    const [comment, setComment] = useState("")
    const [commentList, setCommentList] = useState([])

    function handleChange(e){
        setComment(e.target.value)
    }
    function toggleSad(e){
        e.preventDefault()
        setSad(prevSad => (prevSad = !prevSad))
    }
    function toggleSick(e){
        e.preventDefault()
        setSick(prevSick => (prevSick = !prevSick))
    }
    function handleSubmit(){
        setCommentList(prevList => [...prevList, comment])
    }
    function addComment(id, newComment){
        axios.put(`https://api.vschool.io/ambertan/thing/${id}/comment`, newComment)
        .then(response => console.log("Your comment was successfully added"))
        .catch(error => console.log(error))
    }
    function deleteComment(id){
        const updatedList = commentList.splice(id,1)
        setCommentList(updatedList)
    }
    // function deleteUglyThing(id, index){
    //     axios.delete(`https://api.vschool.io/ambertan/thing/${id}/comment/{$index}`)
    //         .then(response => console.log("Your ugly thing was succesfully deleted"))
    //         .catch(error => console.log(error))
    // }

    const listComments = commentList.map((comment, index) => <Comment delete={deleteComment} index={index} id={props.id} content={comment} key={comment+index}/>)
    return(
        <>
            <form>
                <button onClick={toggleSad} className={`emoji${sad ? " sad-on" : " sad-off"}`}></button>
                <button onClick={toggleSick} className={`emoji${sick ? " sick-on" : " sick-off"}`}></button>
                <br/><br/>
                <input 
                    name="comment"
                    value={comment}
                    placeholder="Any thoughts?"
                    onChange={handleChange}
                />
                <button onClick={() => {
                    handleSubmit();
                    addComment(props.id, commentList)
                    }
                }>Add Comment</button>
                <ul>
                    {listComments}
                </ul>
            </form>
        </>
    )
}

export default CommentList