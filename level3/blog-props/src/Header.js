import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div className="header">
            <Navbar />
            <div className="title-center">
                <h1 className="title-big">Clean Blog</h1>
                <h2 className="subtitle">A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header