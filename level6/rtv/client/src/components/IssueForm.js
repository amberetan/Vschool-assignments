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
        console.log(props._id)
        props.submit(inputs, props._id)
        setInputs(initInputs)

    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="title"
                value={inputs.title}
                name="title"
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="description"
                value={inputs.description}
                name="description"
                onChange={handleChange}
            />
            <button>{props.btnText}</button>
        </form>
    )
}