import React, {useState} from "react"

export default function IssueForm(props){
    const initInputs = {
        title: props.title || "",
        description: props.description || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value}  = e.target
        setInputs(prevInputs => ({
            ...prevInputs, [name]:value
        }))

    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        props.toggle()
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input  className="issueinputs"
                type="text"
                placeholder="Title"
                value={inputs.title}
                name="title"
                onChange={handleChange}
            />
            <input className="issueinputs"
                type="text"
                placeholder="Description"
                value={inputs.description}
                name="description"
                onChange={handleChange}
            />
            <button className="add-btn">{props.btnText}</button>
        </form>
    )
}