import React, {Component} from "react"
import Badge from "./Badge"

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            selfDescrip: "Tell us about yourself",
            badges: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState(prevState => {
            return({
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                favFood: "",
                selfDescrip: "Tell us about yourself",
                badges: [
                    {firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    birthPlace: this.state.birthPlace,
                    phone: this.state.phone,
                    favFood: this.state.favFood,
                    selfDescrip: this.state.selfDescrip,},
                    ...prevState.badges
                ]
            })
        })
    }

    render(){
        const badges = this.state.badges.map((badge, index) => <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} birthPlace={badge.birthPlace} phone={badge.phone} favFood={badge.favFood} selfDescrip={badge.selfDescrip} id={index}/>)
        return(
            <main>
                <h1>Name Badge</h1>
                <form>
                    <input 
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                        className="fName"
                        minLength="3"
                        required
                    />
                    <input 
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        className="lName"
                        minLength="3"
                        required
                    />
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChange}
                        className="email"
                        minLength="3"
                        required
                    />
                    <input 
                        type="text"
                        name="birthPlace"
                        value={this.state.birthPlace}
                        placeholder="Place of Birth"
                        onChange={this.handleChange}
                        className="bPlace"
                        minLength="3"
                        required
                    />
                    <input 
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        placeholder="Phone: 0123456789 (No Dashes)"
                        onChange={this.handleChange}
                        className="phone"
                        minLength="3"
                        required
                        pattern="[0-9]{10}"
                    />
                    <input 
                        type="text"
                        name="favFood"
                        value={this.state.favFood}
                        placeholder="Favorite Food"
                        onChange={this.handleChange}
                        className="favFood"
                        minLength="3"
                        required
                    />
                    <textarea
                        name="selfDescrip"
                        value={this.state.selfDescrip}
                        onChange={this.handleChange}
                        className="textarea"
                        minLength="3"
                        required
                    >
                        
                    </textarea>
                    <button type="submit" id="submitBtn" onClick={this.handleSubmit}>Submit</button>

                </form>
                <ul id="badgeList">
                    {badges}
                </ul>

            </main>
        )
    }
}


export default App