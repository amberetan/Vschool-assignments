import React from "react"
import {
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Wrench from "./wrench.png"

function App(){
    return(
        <>
            <div className="header">  
                <h1>Roto-Router</h1>
                <img src={Wrench} alt="wrench" className="wrench"/>
            </div>  
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <footer>
                <h3>No job is too small or slimey for Roto-Router!</h3>
                <p>Follow us on Social Media:</p>
                <div className="socialMedia">
                    <a href="https://www.facebook.com" ><div className="fb"></div></a>
                    <a href="https://www.instagram.com"><div className="ig"></div></a>
                    <a href="https://www.twitter.com" ><div className="tw"></div></a>
                </div>
            </footer>
        </>
    )
}

export default App