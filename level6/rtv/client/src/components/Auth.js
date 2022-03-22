import React, {useState, useContext} from "react"
import {UserContext} from "../context/UserProvider.js"
import AuthForm from "./AuthForm.js"

const initInputs = { username: "", password: ""}

export default function Auth(){
    const [toggle, setToggle] = useState(false)
    const [inputs, setInputs] = useState(initInputs)
    const { signup, login } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }
    
      function handleSignup(e){
        e.preventDefault()
        signup(inputs)
      }
    
      function handleLogin(e){
        e.preventDefault()
        login(inputs)
      }
    return(
        <>
            { toggle ? 
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Signup"
                
                />
                <p onClick={() => setToggle(prev => !prev)}>Already a member? Login.</p>

            </>
            :
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                />
                <p onClick={() => setToggle(prev => !prev)}>Not a member? Signup.</p>
            </>    
            }
        </>
    )
}