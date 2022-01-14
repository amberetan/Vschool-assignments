import React from "react"
import ReactDOM from "react-dom"
import {NpsContextProvider} from "./npsContext"
import {BrowserRouter} from "react-router-dom"
import "./styles.css"
import App from "./App"

ReactDOM.render(
    <NpsContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </NpsContextProvider>, 
    document.getElementById("root")
)