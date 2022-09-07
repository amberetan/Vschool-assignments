import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"


function Favorites(){
    const {favorites} = useContext(UserContext)
    return(
        <>
        {favorites.map()}
        </>
    )

}

export default Favorites