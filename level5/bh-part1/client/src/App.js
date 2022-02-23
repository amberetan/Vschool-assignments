import React , { useState, useEffect } from "react"
import Bounty from "./components/Bounty.js"
import Form from "./components/Form.js"
import axios from "axios"

function App(){
    const [bountyList, setBountyList] = useState([])
    
    useEffect(() => {
        getBounties()
    }, [])

    // function switchToggle(){
    //     setToggle(prevToggle => !prevToggle)
    // }

    function getBounties(){
        axios.get("/bounty")
            .then(res => {
                setBountyList(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function addBounty(newBounty){
        axios.post('/bounty', newBounty)
            .then(res => {
                setBountyList(prevList => [res.data, ...prevList])
            })
            .catch(err => console.log(err))
    }
    function deleteBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBountyList(prevList => prevList.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }
    function editBounty(updates, bountyId){
        axios.put(`/bounty/${bountyId}`, updates)
            .then(res => {
                setBountyList(prevList => prevList.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1 className="header">Bounty Hunter</h1>
            <Form 
                submit={addBounty}
                btnText="Add Bounty"

            
            />

            { bountyList.map(bounty => 
                <Bounty 
                    {...bounty} 
                    key={bounty.firstName+bounty.lastName}
                    addBounty={addBounty}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                    // switchToggle={switchToggle}
                    // toggle={toggle}
                />
            )}
        </div>
    )
}

export default App