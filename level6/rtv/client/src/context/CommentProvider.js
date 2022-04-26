import React, {useState, useEffect, useContext} from "react"
import { UserContext } from "./UserProvider"

export const CommentContext = React.createContext()



export default function CommentProvider(props){
    //Comments
    const [commentFeed, setCommentFeed] = useState([])
    const {userAxios} = useContext(UserContext)

    useEffect(()=>{
        getComments()
    }, [])

    function getComments(){
        userAxios.get(`/api/comment`)
            .then(res => {
                setCommentFeed(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(issueId, newComment){
        userAxios.post(`/api/comment/${issueId}`, newComment)
            .then(res => {
                setCommentFeed(prevFeed => ([
                    ...prevFeed, res.data
                ])
                )}
            )
            .catch(err => console.log(err.response.data.errMsg))

    }

    function deleteComment(commentId){
        userAxios.delete(`/api/comment/${commentId}`)
            .then(res => {
                setCommentFeed(commentFeed.filter(comment => comment._id !== commentId))
            })
            .catch(err => console.log(err.response.data.errMsg))

    }
    
    return(
        <CommentContext.Provider
            value={{
                getComments,
                addComment,
                deleteComment,
                commentFeed
            }}
        >
            {props.children}
        </CommentContext.Provider>
    )
}