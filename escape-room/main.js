const readlineSync = require('readline-sync');

while (ans2 !== "D") {
    console.log("You find yourself in a room")
    var ans = readlineSync.question('What do you want to do? Put hand in hole (H), Find the key (K), Open the door (D)  ')

    if (ans==="H") {
        console.log("You have died.")
    } else if (ans==="D") {
        console.log("You cannot open the door without the key.")
    } else if (ans==="K") {
        console.log("You found the key.");
        var ans2 = readlineSync.question('What do you want to do? Put hand in hole (H), Open the door (D)  ')
        if (ans2==="H") {
            console.log("You have died.")
        } else if (ans2==="D") {
            console.log("You opened the door and escaped!")
        }
    }
}