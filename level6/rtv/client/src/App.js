import React, { useContext } from "react"
import { Routes, Route, Link, Navigate } from "react-router-dom"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import IssueFeed from "./components/IssueFeed.js"
import {UserContext} from "./context/UserProvider.js"
 
function App(){
    const { logout, token } = useContext(UserContext)
    return(
        <>
        <div className="header">   
            <h1 className="pagetitle">Rock The Vote</h1>
            { token && <nav>
                <Link to="/">Home</Link>
                <Link to="/public">Public</Link>
                <Link to="/profile">Profile</Link>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </nav>}
        </div>
        
            
            <Routes>
                <Route 
                    path="/" 
                    element={token ? <Navigate replace to="/public" /> : <Auth />}
                />
                <Route 
                    path="/profile"
                    element={!token ? <Navigate replace to="/" /> : <Profile />}
                />
                <Route 
                    path="/public"
                    element={!token ? <Navigate replace to="/" /> : <IssueFeed />}
                />
            </Routes>
        <footer>

        </footer>
        </>
    )
}

export default App