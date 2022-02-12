import React, { useState } from "react"
import Form from "./Form.js"

function Bounty(props){
    const [editFormToggle, setToggle] = useState(false)
    return(
        <>
        <div className="bounty-full">
        {   !editFormToggle ?
                <div className="bounty-comp">
                    <h1>{props.firstName} {props.lastName}</h1>
                    <img className="bountyImg" src={props.imgURL} alt={`${props.firstName} ${props.lastName}`} />
                    <h3>{ props.isLiving ? "Living" : "Dead" }</h3>
                    <h2>{props.type}</h2>
                    <h1>${props.bountyAmount}</h1>
                    <div className="buttons">
                        <button onClick={() => props.deleteBounty(props._id)}className="deleteBtn">Delete</button>
                        <button onClick={() => setToggle(prevToggle => !prevToggle)}className="editBtn">Edit</button>
                    </div>
                </div>
            :    
                <div className="editForm">
                    <Form 
                        firstName={props.firstName}
                        lastName={props.lastName}
                        imgURL={props.imgURL}
                        isLiving={props.isLiving}
                        type={props.type}
                        bountyAmount={props.bountyAmount}
                        _id={props._id}
                        btnText="Submit Edit(s)"
                        submit={props.editBounty}

                    />
                    <button onClick={() => setToggle(prevToggle => !prevToggle)} className="closeBtn">Close</button>
                </div>
            
        }          
        </div>
        </>
    )
}

export default Bounty