
function forception(people, alphabet){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var newAlphabet = alphabet.split('')
    var newArr = []
    for (var i = 0; i < people.length; i++){
        newArr.push(people[i])
        for (var j = 0; j < 1; j++){
            for (var k = 0; k < newAlphabet.length; k++){
                newArr.push(newAlphabet[k])
            }
        }
    }
    console.log(newArr)
}
forception()

//people[0] + alphabet[0-25] + people[1] + alphabet [0-25]