import React, {useState} from "react"
import Badge from "./Badge"

function App() {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        favFood: "",
        selfDescrip: "Tell us about yourself",
    })
    const [badges, setBadges] = useState([])

    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInput => ({...prevInput, [name]: value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        setBadges(prevBadge => [...prevBadge, inputs])
        setInputs({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            selfDescrip: "Tell us about yourself",
        })

    }

    const badge = badges.map((badge, index) => <Badge 
            firstName={badge.firstName} 
            lastName={badge.lastName} 
            email={badge.email} 
            birthPlace={badge.birthPlace} 
            phone={badge.phone} 
            favFood={badge.favFood} 
            selfDescrip={badge.selfDescrip} 
            id={index}
        />
    )
    return(
        <main>
            <h1>Name Badge with Hooks</h1>
            <form>
                <input 
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    className="fName"
                    minLength="3"
                    required
                />
                <input 
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="lName"
                    minLength="3"
                    required
                />
                <input 
                    type="text"
                    name="email"
                    value={inputs.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className="email"
                    minLength="3"
                    required
                />
                <input 
                    type="text"
                    name="birthPlace"
                    value={inputs.birthPlace}
                    placeholder="Place of Birth"
                    onChange={handleChange}
                    className="bPlace"
                    minLength="3"
                    required
                />
                <input 
                    type="tel"
                    name="phone"
                    value={inputs.phone}
                    placeholder="Phone: 0123456789 (No Dashes)"
                    onChange={handleChange}
                    className="phone"
                    minLength="3"
                    required
                    pattern="[0-9]{10}"
                />
                <input 
                    type="text"
                    name="favFood"
                    value={inputs.favFood}
                    placeholder="Favorite Food"
                    onChange={handleChange}
                    className="favFood"
                    minLength="3"
                    required
                />
                <textarea
                    name="selfDescrip"
                    value={inputs.selfDescrip}
                    onChange={handleChange}
                    className="textarea"
                    minLength="3"
                    required
                >
                    
                </textarea>
                <button type="submit" id="submitBtn" onClick={handleSubmit}>Submit</button>

            </form>
            <ul id="badgeList">
                {badge}
            </ul>

        </main>
    )
}

export default App