import React from "react"
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import {NpsContextProvider} from "./npsContext"
import {BrowserRouter} from "react-router-dom"
import "./styles.css"
import App from "./App"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <NpsContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </NpsContextProvider>
)

