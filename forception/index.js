
function forception(people, alphabet){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var newAlphabet = alphabet.split('')

    for (var i = 0; i < people.length; i++){
        var newArr = []
        newArr.push(people[i])
        for (var j = 0; j <people.length; j++){
            newArr.concat(newAlphabet)
        }
    }
    console.log(newArr)
}
forception()

//people[0] + alphabet[0-25] + people[1] + alphabet [0-25]