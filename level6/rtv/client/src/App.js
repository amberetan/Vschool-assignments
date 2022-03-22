import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Home from "./components/Home.js"
 
function App(){
    return(
        <>
        <div>   
            <h1>Rock The Vote</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <button>Logout</button>
            </nav>
        </div>
        
            
            <Routes>
                <Route 
                    path="/" 
                    element={<Auth />}
                />
                <Route 
                    path="/profile"
                    element={ <Profile />}
                />
                <Route 
                    path="/home"
                    element={ <Home />}
                />
            </Routes>
        <footer>
            
        </footer>
        </>
    )
}

export default App