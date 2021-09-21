import React from "react"
import Blogpost from "./Blogpost"
import blogPosts from "./blogPosts"

function Bloglist(){
    const blogPost = blogPosts.map(post => <Blogpost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date} />)
    return(
        <div className="blog-list">
            {blogPost}
            <div className="op-div"><div className="older-posts">OLDER POSTS</div></div>
        </div>
    )
}

export default Bloglist