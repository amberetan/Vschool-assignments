import React, {useState, useContext} from "react"
import {UglyContext} from "./uglyContext"
import CommentList from "./CommentList"

function Uglything(props){
    const context = useContext(UglyContext)
    const [editBtn, setEditBtn] = useState(false)
    const [editedThing, setEditedThing] = useState({imgUrl: props.imgUrl, title: props.title, description: props.description, comments: props.comments})
    
    function editUglyThing(e){
        setEditBtn(prevEditBtn => (prevEditBtn = !prevEditBtn))
    }

    function handleChange(event){
        const {name, value} = event.target
        setEditedThing(prevThing => ({...prevThing, [name]:value}))
    }

    return(
        <li>
            <form>
                <img src={props.imgUrl} alt="ugly pic" />
                <input 
                    className={(editBtn ? "save-thing" :"edit-thing")} 
                    name="imgUrl" 
                    value={editedThing.imgUrl}
                    placeholder={props.imgUrl} 
                    onChange={handleChange}
                />                
                <h1 className={(editBtn ? "edit-thing" : "save-thing")}>{props.title}</h1>
                <input 
                    className={(editBtn ? "save-thing" :"edit-thing")} 
                    name="title" 
                    value={editedThing.title} 
                    placeholder={props.title} 
                    onChange={handleChange}
                />
                <p className={(editBtn ? "edit-thing" : "save-thing")}>{props.description}</p>
                <input 
                    className={(editBtn ? "save-thing" :"edit-thing")} 
                    name="description" 
                    value={editedThing.description} 
                    placeholder={props.description} 
                    onChange={handleChange}
                />
                <button 
                    type="button"
                    className={(editBtn ? "edit-thing" : "save-thing")} 
                    onClick={editUglyThing}
                >Edit</button>
                <button 
                    type="button"
                    className={(editBtn ? "save-thing" :"edit-thing")} 
                    onClick={() => {
                        context.editUglyThing(props.id, editedThing);
                        editUglyThing()}
                    }
                >Save</button>
                <button type="button" onClick={() => context.deleteUglyThing(props.id)}>Delete</button>
            </form>
            <br/><br/>
            <CommentList id={props.id} commentList={props.comments}/>
        </li>
    )
}

export default Uglything