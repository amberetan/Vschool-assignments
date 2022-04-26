import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserProvider.js"
import App from "./App.js"
import "./styles.css"
import CommentProvider from "./context/CommentProvider.js"

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <CommentProvider>
                <App/>
            </CommentProvider>
        </UserProvider>
    </BrowserRouter>, 
    document.getElementById('root')
  )