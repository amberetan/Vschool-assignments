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
        userIssues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    const [issueFeedState, setIssueFeed] = useState([])

    useEffect(() => {
        getAllIssues()
        getUserIssues(userState.user._id)
    }, [])

    //User Auth
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

    //Issues
    function getAllIssues(){
        userAxios.get("/api/issue")
        .then(res => {
            setIssueFeed(res.data)
            getUserIssues(userState.user._id)
        })
        .catch(err => console.log(err.response.data.message))
        
    }

    function getUserIssues(userId){
        userAxios.get(`/api/issue/${userId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState, userIssues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.message))
    }

    function addIssue(newIssue){
        userAxios.post(`/api/issue`, newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState, userIssues: [...prevState.userIssues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.message))
        }
    
    function deleteIssue(issueId){
        userAxios.delete(`/api/issue/${issueId}`)
            .then(res => {
                setIssueFeed(prevState => prevState.filter(issue => issue._id !== issueId))
            })
    }

    function editIssue(updates, issueId){
        userAxios.put(`/api/issue/${issueId}`, updates)
            .then(res => {
                setIssueFeed(prevFeed => prevFeed.map(issue => issue._id !== issueId ? issue : res.data))
             })
            .catch(err => console.log(err.response.data.message))
    }

    
    //Up Votes and Down Votes
    function handleUpVotes(id){
        userAxios.put(`/api/issue/upvote/${id}`)
            .then(res => {
                setIssueFeed(prevFeed => prevFeed.map(issue => issue._id !== id ? issue : res.data))
                getUserIssues()

            })
            .catch(err => console.log(err.response.data.message))
    }

    function handleDownVotes(id){
        userAxios.put(`/api/issue/downvote/${id}`)
            .then(res => {
                setIssueFeed(prevFeed => prevFeed.map(issue => issue._id !== id ? issue : res.data))
                getUserIssues()

            })
            .catch(err => console.log(err.response.data.message))
    }
   
    return(
        <UserContext.Provider 
            value={{ 
                ...userState, 
                issueFeedState, 
                signup, 
                login, 
                logout,
                resetAuthErr,
                getAllIssues,
                getUserIssues, 
                addIssue,
                deleteIssue,
                editIssue,
                handleUpVotes,
                handleDownVotes,
                userAxios,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}