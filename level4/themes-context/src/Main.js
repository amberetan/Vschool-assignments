import React, { useContext } from "react"
import ShaveIce from "./shave-ice.jpeg"
import ShaveIce2 from "./shave-ice-2.jpeg"
import {ThemeContext} from "./themeContext"

function Main(props){
    const {changeTheme} = useContext(ThemeContext)
    return(
        <>
            <div>
                <button className="changeBtn" onClick={changeTheme}>Change Theme</button>
            </div>
            <div className="content">
                <h2 className="topTitle">What Is Shave Ice?</h2>
                <p className="topContent">Hawaiian shave ice or shaved ice is an ice-based dessert made by shaving a block of ice and flavoring it with syrup and other sweet ingredients. Hawaiian shave ice is derived from a similar ice-based dessert from Japan called kakigōri. Shave ice is characteristically served in a conical paper or plastic cup with flavored syrups poured over the top with additional elements like ice cream, azuki beans, or condensed milk (also known as Snow Cap). (source)</p>
                <img id="shaveIce1" src={ShaveIce} alt="shave ice"/>
                <></>
                <h2 className="bottomTitle">Why it is NOT a snow cone:</h2>
                <img id="shaveIce2" src={ShaveIce2} alt="shave ice" />
                <p className="bottomContent">Snow cones, a similar American dessert, are made with crushed ice rather than shaved ice. The thin ice shavings of shave ice allow for the flavored syrups to be absorbed completely instead of sinking to the bottom. (source)</p>
            </div>
        </>
    )
}

export default Main