import React, { useState } from "react"

export default function Form(props){
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        isLiving: props.isLiving || false,
        bountyAmount: props.bountyAmount || 0,
        type: props.type || "",
        imgURL: props.imgURL || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }
    function handleRadioChange(e){

        setInputs(prevInputs => ({...prevInputs, type:e.target.value}))
    }
    function handleCheckboxChange(e){
        setInputs(prevInputs => ({...prevInputs, isLiving:!prevInputs.isLiving}))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={inputs.firstName}
                onChange={handleChange}
                className="fName"
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={inputs.lastName}
                onChange={handleChange}
                className="lName"
            />
            <div className="bountyAmt">
                Bounty<input
                    name="bountyAmount"
                    type="number"
                    step="100"
                    placeholder="Bounty Amount"
                    value={inputs.bountyAmount}
                    onChange={handleChange}
                />
            </div>
            <div className="isLiving">
                Living <input
                    name="isLiving"
                    type="checkbox"
                    placeholder=""
                    checked={inputs.isLiving}
                    onChange={handleCheckboxChange} 
                />
            </div>
            <div className="type">
                Jedi <input 
                    type="radio"
                    name="type"
                    value="Jedi"
                    checked={inputs.type === "Jedi"}
                    onChange={handleRadioChange}
                    className="jedi"
                />
                Sith <input 
                    type="radio"
                    name="type"
                    value="Sith"
                    checked={inputs.type === "Sith"}
                    onChange={handleRadioChange}
                />
            </div>
            <input
                name="imgURL"
                type="text"
                placeholder="Image URL"
                value={inputs.imgURL}
                onChange={handleChange}
                className="imgUrl"
            />
            <button className="addBtn">{props.btnText}</button>
        </form>
    )
}



