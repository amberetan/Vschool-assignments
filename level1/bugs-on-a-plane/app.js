var form = document.airlineForm;
var submit = document.getElementById("submit");
//var query = document.querySelector;

function formAlert() {
    var firstName = document.airlineForm.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked == true) {
        diet.push(document.getElementById("vegan").value)
    }
    if (form.gluten.checked == true) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.paleo.checked == true) {
        diet.push(document.getElementById('paleo').value);
    }


    alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);
//submit.addEventListener("click", testing)

function testing(){
    console.log("testing")
}