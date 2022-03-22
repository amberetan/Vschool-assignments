import React, {useState, useEffect} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "",
        userIssues: []
    }

    const [userState, setUserState] = useState(initState)

    const [issueFeedState, setIssueFeed] = useState([])

    useEffect(() => {
        getAllIssues()
        getUserIssues()
    }, [])

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(prevState => ({
                    ...prevState, user, token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
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
            .catch(err => console.log(err.response.data.errMsg))

    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
        })
    }

    function getAllIssues(){
        userAxios.get("/api/issue")
        .then(res => {
            setIssueFeed(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues(){
        userAxios.get(`/api/issue/user`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState, userIssues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue){
        userAxios.post(`/api/issue`, newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState, userIssues: [...prevState.userIssues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
        }
    
    function deleteIssue(issue, issueId){
        userAxios.delete(`/api/issue/${issueId}`, issue)

    }

    function editIssue(updates, issueId){
        userAxios.put(`/api/issue/${issueId}`, updates)
            .then(res => {
                setUserState(prevState => prevState.userIssues.map(issue => issue._id !== issueId ? issue : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }




    return(
        <UserContext.Provider 
            value={{ 
                ...userState, 
                issueFeedState, 
                signup, 
                login, 
                logout, 
                getAllIssues, 
                getUserIssues,
                addIssue,
                deleteIssue,
                editIssue
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}