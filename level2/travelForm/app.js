const form = document.passengerInfo

form.addEventListener("submit", function(event){
    event.preventDefault()

    let firstName = form.firstName.value
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let travelLocation = form.travelLocation.value
    
    const diet = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + travelLocation + "\nDietary Restriction: " + diet
    )
})
