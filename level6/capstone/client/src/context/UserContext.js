import React, {useState, useEffect} from "react"
import axios from "axios"

const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props){
    const initState = {
        user:JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    //UserAuth
    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token} = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(prevState => ({
                    ...prevState, user, token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.message))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))

                setUserState(prevUserState => ({
                    ...prevUserState, user, token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.message))
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    //Trip database
    function getTrip(id){
        userAxios.get(`/api/trip/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    function addTrip(newTrip){
        userAxios.post(`/api/trip/`, newTrip)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return(
        <UserContext.Provider 
            value={{ 
                ...userState, 
                signup, 
                login, 
                logout,
                resetAuthErr,
                userAxios,
                getTrip,
                addTrip
            }}
        >
            {props.children}
        </UserContext.Provider>
    )


}

export {UserProvider, UserContext}