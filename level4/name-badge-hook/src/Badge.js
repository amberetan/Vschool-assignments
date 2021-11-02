import React from "react"

function Badge(props){
    return(
        <li>
            <div className="badgeDiv">
                <p className={props.id%2===0 ? "badgeTitle1" : "badgeTitle2"}>Badge</p>
                <p id="nameB">Name: {props.firstName} {props.lastName}</p>
                <p id="phoneB">Phone: {props.phone}</p>
                <p id="bPlaceB">Place of birth: {props.birthPlace}</p>
                <p id="favFoodB">Favorite Food: {props.favFood}</p>
                <p id="emailB">Email: {props.email}</p>
                <p id="selfDescripB">{props.selfDescrip}</p>
            </div>
        </li>
    )
}

export default Badge