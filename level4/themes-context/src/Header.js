import React from "react"
import NavBar from "./NavBar"
import Logo from "./Logo.png"

function Header(props){
    return(
        <div className={props.theme +"-theme-header"}>
            <img src={Logo} alt="logo"/>
            <h1>LuLu's Shave Ice</h1>
            <NavBar />
        </div>
    )
}

export default Header