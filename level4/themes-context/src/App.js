import React, {useContext} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {ThemeContext} from "./themeContext"


function App(){
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`body, ${theme}-theme-body`}>
            <Header theme={theme}/>
            <Main />
            <Footer theme={theme}/>
        </div>
    )
}

export default App