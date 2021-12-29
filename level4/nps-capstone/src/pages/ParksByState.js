import React from "react"
import stateMap from "../img/statesmap.jpeg"
import "./states.css"

function ParksByState(){
    return (
        <div className="parks-by-state">
            <div>
                <img src={stateMap} alt="map of states" height="500px" className="stateMap"></img>
                <div className="buttons">
                    <button className="al">AL</button>
                    <button className="ak">AK</button>
                    <button className="as">AS</button>
                    <button className="az">AZ</button>
                    <button className="ar">AR</button>
                    <button className="ca">CA</button>
                    <button className="co">CO</button>
                    <button className="ct">CT</button>
                    <button className="de">DE</button>
                    <button className="dc">DC</button>
                    <button className="fl">FL</button>
                    <button className="ga">GA</button>
                    <button className="gu">GU</button>
                    <button className="hi">HI</button>
                    <button className="id">ID</button>
                    <button className="il">IL</button>
                    <button className="in">IN</button>
                    <button className="ia">IA</button>
                    <button className="ks">KS</button>
                    <button className="ky">KY</button>
                    <button className="la">LA</button>
                    <button className="me">ME</button>
                    <button className="md">MD</button>
                    <button className="ma">MA</button>
                    <button className="mi">MI</button>
                    <button className="mn">MN</button>
                    <button className="ms">MS</button>
                    <button className="mo">MO</button>
                    <button className="mt">MT</button>
                    <button className="ne">NE</button>
                    <button className="nv">NV</button>
                    <button className="nh">NH</button>
                    <button className="nj">NJ</button>
                    <button className="nm">NM</button>
                    <button className="ny">NY</button>
                    <button className="nc">NC</button>
                    <button className="nd">ND</button>
                    <button className="mp">MP</button>
                    <button className="oh">OH</button>
                    <button className="ok">OK</button>
                    <button className="or">OR</button>
                    <button className="pa">PA</button>
                    <button className="pr">PR</button>
                    <button className="ri">RI</button>
                    <button className="sc">SC</button>
                    <button className="sd">SD</button>
                    <button className="tn">TN</button>
                    <button className="tx">TX</button>
                    <button className="ut">UT</button>
                    <button className="vt">VT</button>
                    <button className="vi">VI</button>
                    <button className="va">VA</button>
                    <button className="wa">WA</button>
                    <button className="wv">WV</button>
                    <button className="wi">WI</button>
                    <button className="wy">WY</button>
                </div>
            </div>
        </div>
    )
}

export default ParksByState