import React from "react"

function Blogpost(props) {
    return(
        <div className="blog-post">
            <h3>{props.title}</h3>
            <h4>{props.subTitle}</h4>
            <p>Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default Blogpost