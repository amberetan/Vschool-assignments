import React from "react"
import {Link, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ParksByState from "./pages/ParksByState"
import MyTrip from "./pages/MyTrip"


function App(){
    return(
        <>
            <header>
                National Parks
            </header>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/parksbystate">Parks</Link>
                <Link className="link" to="/mytrip">My Trip</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/parksbystate" element={<ParksByState />}/>
                    <Route path="/mytrip" element={<MyTrip />}/>
                </Routes>
            </main>
            <footer>
                <p>Photos and information courtesy of the <a href="https://www.nps.gov/index.htm">National Parks Service</a>.</p>
                <p>website by Amber Tan©</p>
            </footer>

        </>
    )
}

export default App