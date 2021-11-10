import React, {useState} from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [theme, setTheme] = useState("dark")

    function changeTheme(){
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.provider value={{theme: theme}}>
            {props.children}
        </ThemeContext.provider>
    )
}

export {ThemeContextProvider, ThemeContext}
