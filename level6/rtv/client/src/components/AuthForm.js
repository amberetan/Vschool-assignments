import React from "react"

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username,
            password
        }
    } = props

    return(
        <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    value={username}
                    placeholder="username"
                    type="text"
                    onChange={handleChange}
                />
                <input
                    name="password"
                    value={password}
                    placeholder="password"
                    type="text"
                    onChange={handleChange}
                />
                <button>{btnText}</button>
        </form>
    )
}