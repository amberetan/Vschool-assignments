import React, {useContext} from "react"
import {NpsContext} from "../npsContext"
import {Link} from "react-router-dom"

function Home(){
    const {pics} = useContext(NpsContext)
    const backgroundImg = pics.images.map(image =>
        <li key={image.caption}>
            <span><img alt={image.altText} src={image.url}></img></span>
        </li>)
    console.log(backgroundImg)
    return(
        <div className="home">
            <ul className="home-background">
                {backgroundImg}
            </ul>
            <div className="explore">
                <Link to="/parksbystate"><button className="exploreBtn">Explore!</button></Link>
            </div>
        </div>
    )
}

export default Home