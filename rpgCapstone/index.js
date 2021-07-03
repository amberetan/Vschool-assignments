const readlineSync = require('readline-sync');

const userName = readlineSync.question("Hello, weary traveler. Welcome to the Realm of Darkness. Beyond lay treasures and nightmares beyond your imagination. Give me your name if you are foolish enough to enter: ")

const user = {
    userName: userName,
    HP: 100,
    inventory: []
}


const wildEnemy = [
    werewolf = {
        name: werwolf,
        HP: 25,
        isAlive: true,
        description: " hairy, drooling Werewolf, with a sneering glint in his eye, ",
        runDialog: "You turn around quickly, hoping they didn't see you, and run as you feel the cold and sharp claws tear at your shirt!  ",
    },
    minotaur  = {
        name: minotaur,
        HP: 25,
        isAlive: true,
        description: " hulking Minotaur, with a large bloodstained axe in each hand, ",
        runDialog: "You leap backwards, as his axes swing at you, clipping your arm as you try to escape!  ",
    },
    goblin = {
        name: goblin,
        HP: 25,
        isAlive: true,
        description: " haggard and nasty Goblin, clad with a club spiked with his enemy's bones, ",
        runDialog: "You slide to right to avoid a swing of his club, missing almost all of it except the end which busts your kneecap!  ",
    },
    vampire = {
        name: vampire,
        HP: 35,
        isAlive: true,
        description: " gaunt Vampire, staring out at you with his yellow eyes -- he had yellow eyes, so help me lard, YELLOW EYES!! -- ",
        runDialog: "Though nearly paralyzed with fear, you swing your legs as fast as you can, as his bat form bites at your fleeing neck! ",
    },
    banshee = {
        name: banshee,
        HP: 35,
        isAlive: true,
        description: " ghostly, skeletal Banshee, with long sharp teeth and nails like ice picks, ",
        runDialog: "You stumble backwards, quickly picking yourself up as she impales your feet! ",
    },
    harpy = {
        name: harpy,
        HP: 35,
        isAlive: true,
        description: " shrieking Harpy, each cry growing louder and threatening to tear your eardrums in half, ",
        runDialog: "You turn and run, clapping your hands around your ears to keep them from bursting from the deafening shrieks and swiping claws of the Harpy! ",
    },
    giant = {
        name: giant,
        HP: 50,
        isAlive: true,
        description: " lumbering and massive Giant, slow of wit but deadly in force, ",
        runDialog: "Overwhelmed by his size, you back up slowly, then quickly as his massive foot knocks the wind out of you!  "
    },
    troll = {
        name: troll,
        HP: 50,
        isAlive: true,
        description: " malicious Troll, fresh from harvesting the tears of his enemies, ",
        runDialog: "Without a second thought you turn and run, screaming as you feel his giant tusks strike you in the back!  "
    },
    medusa = {
        name: medusa,
        HP: 50,
        isAlive: true,
        description: " slithering Medusa, her beautiful but dangerous face luring you towards certain death ",
        runDialog: "Avoiding eye contact, you swing around and run, hearing and feeling the hissing bites of her snake covered hair!  "
    },
    dragonKing = {
        name: dragonKing,
        HP: 100,
        isAlive: true,
        description: " magnificent, fire-breathing Dragon (the dreaded King of this wood) who is merciless and despises unknown travelers ",
        runDialog: "Mustering all you courage, you run, knowing it will be a futile attempt but hoping you might escape.  You feel the King's hot fire breath as you run!"
    }
]

const specialItems = [
    "bundle of questionable herbs",
    "vial of blood",
    "Ichneumon armor",
    "Master Sword",
    "Philosopher's Stone",
    "large opal",
    "healing potion",
    "broken dagger",
    "dusty emerald",
    "necklace made of teeth",
    "half-eaten sandwich"
]

const falseAlarm = [
    "Something flutters quickly past your ear, " ,
    "A sudden crack of thunder nearby startles you, ",
    "A ear-splitting shriek rings out through the air, ",
    "A thudding of large footsteps can be heard to your right, ",
    "A high-pitched maniacal laugh creeps through the air above you, ",
    "The struggling cries of something small can be heard in the near distance, ",
    "An incredibly bright flash of light streaks through the sky above, ",
    "Something dark and furry slithers across your path ahead, ",
    "A low and rumbling growl drifts over from your left, "
]

const startGame = readlineSync.question("Well, " + userName + " you have proven your bravery and determination already. There is no turning back. The only escape is death, yours or the Dragon Kings. Keep walking ('W'), attack what comes before you ('A') or try to run if you dare ('R'). You may see your health status and items you have collected by pressing 'P' when you are not in combat. Will you walk in the woods?  ")

if(startGame === "W"){
    return playGame()
}

function playGame() {
    while(user.HP >= 1){
        console.log("You are walking in the woods...")
        return walking()
    }
}

function walking() {
    const enemyProbability = Math.floor(Math.random() * 101)
    if(enemyProbability>=65) {
        const randomEnemyPicker =  Math.floor(Math.random() * wildEnemy.length)
        const randomEnemy = wildEnemy[randomEnemyPicker]
        const enemyReaction = readlineSync.question("As you walk through the woods, you hear something on the path before you. Suddenly, a" + randomEnemy.description + "appears in your path.  Will you attack or run?  ")
        if(enemyReaction === "A"){
            return attacking()
        }
        if(enemyReaction === "R"){
            return running()
        }
    }
    else {
        user.HP = user.HP+5
        const randomFalseAlarmPicker = Math.floor(Math.random() * falseAlarm.length)
        const randomFalseAlarm = falseAlarm[randomFalseAlarmPicker]
        const keepWalking = readlineSync.question(randomFalseAlarm + "and then everything is quiet.  Will you continue to walk in the woods?  ")
        if(keepWalking === "W"){
            return playGame()
        }
        if(keepWalking === "P" || keepWalking === "p"){
            console.log(user)
            return playGame()
        }
        if(keepWalking === "C"){
            return checkEnemies()
        }
    }    
}

function attacking() {
    const randomEnemyPicker =  Math.floor(Math.random() * wildEnemy.length)
    const randomEnemy = wildEnemy[randomEnemyPicker]

    console.log("You lash out, using whatever you have available, hoping it will cause some damage. ")
    const randomEnemyDamage = Math.floor(Math.random() * 10 + 10)
    randomEnemy.HP = randomEnemy.HP - randomEnemyDamage
    console.log("Your enemy received " + randomEnemyDamage + " in damage. ")
    const randomUserDamage = Math.floor(Math.random() * 10 + 5)
    user.HP = user.HP - randomUserDamage
    console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
    let attackMode = true
    while(randomEnemy.HP >= 1 && attackMode){
        const keepAttacking = readlineSync.question("Your enemy is still alive, will you attack again or run?  ")
        if(keepAttacking === "A" || keepAttacking === "a"){
            const randomDamage = Math.floor(Math.random() * 10 + 10)
            randomEnemy.HP = randomEnemy.HP - randomDamage
            console.log("You lash out again, hoping this will be the last blow. Your enemy received " + randomDamage + " damage. ")
            const randomUserDamage = Math.floor(Math.random() * 10 + 5)
            user.HP = user.HP - randomUserDamage
            console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
        }
        if(keepAttacking === "R"){
            return attackMode = false
            return running()
        }
        const randomItemPicker = Math.floor(Math.random() * specialItems.length)
        const randomItem = specialItems[randomItemPicker]
        user.inventory.push(randomItem)
        const afterAttack = readlineSync.question("Your enemy is dead. As you stand over their corpse you see something shimmering in the dark. You lean down to examine it and find a " + randomItem + " , which you place in your satchel. Will you continue to walk in the woods?")
        if (afterAttack === "W") {
            return playGame()
        }
        if (afterAttack === "P"){
            console.log(user)
            return playGame()
        }
        if(afterAttack === "C"){
            return checkEnemies()
        }
    }
}

function running() {
    const escapeProbability = Math.floor(Math.random() * 101)
    const randomEnemyPicker =  Math.floor(Math.random() * wildEnemy.length)
    const randomEnemy = wildEnemy[randomEnemyPicker]

    if(escapeProbability >= 50){
        const randomUserDamage = Math.floor(Math.random() * 10 + 5)
        user.HP = user.HP - randomUserDamage
        console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + " in damage.  You were successful in your attempt to run away.")
        const afterRunning = readlineSync.question('You wait a few moments, will you continue to walk in the woods?  ')
        if(afterRunning === "W"){
            return playGame()
        }
        if(afterRunning === "P"){
            console.log(user)
            return playGame()
        }
        if(afterRunning === "C"){
            return checkEnemies()
        }
    }
    else {
        const randomUserDamage = Math.floor(Math.random() * 10 + 5)
        user.HP = user.HP - randomUserDamage
        console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + " in damage.  You were UNsuccessful in your attempt to run away.")
        const keepRunning = readlineSync.question('Would you like to attack or run again?  ')
        if(keepRunning === "A"){
            return attacking()
        }
        if(keepRunning === "R"){
            return running()
        }
    }
}

function checkEnemies(){
    console.log(wildEnemy)
    return playGame()
}

//BELOW IS MY FIRST COUPLE ATTEMPTS AT CODE. I'M KEEP IT HERE FOR REFERENCE. 
/*const readlineSync = require('readline-sync');

const userName = readlineSync.question("Hello, weary traveler. Welcome to the Realm of Darkness. Beyond lay treasures and nightmares beyond your imagination. Give me your name if you are foolish enough to enter: ")

const user = {
    userName: userName,
    HP: 100,
    inventory: []
}


const wildEnemy = [
    werewolf = {
        HP: 25,
        isAlive: true,
        description: " hairy, drooling Werewolf, with a sneering glint in his eye, ",
        runDialog: "You turn around quickly, hoping they didn't see you, and run as you feel the cold and sharp claws tear at your shirt!  ",
    },
    minotaur  = {
        HP: 25,
        isAlive: true,
        description: " hulking Minotaur, with a large bloodstained axe in each hand, ",
        runDialog: "You leap backwards, as his axes swing at you, clipping your arm as you try to escape!  ",
    },
    goblin = {
        HP: 25,
        isAlive: true,
        description: " haggard and nasty Goblin, clad with a club spiked with his enemy's bones, ",
        runDialog: "You slide to right to avoid a swing of his club, missing almost all of it except the end which busts your kneecap!  ",
    },
    vampire = {
        HP: 35,
        isAlive: true,
        description: " gaunt Vampire, staring out at you with his yellow eyes -- he had yellow eyes, so help me lard, YELLOW EYES!! -- ",
        runDialog: "Though nearly paralyzed with fear, you swing your legs as fast as you can, as his bat form bites at your fleeing neck! ",
    },
    banshee = {
        HP: 35,
        isAlive: true,
        description: " ghostly, skeletal Banshee, with long sharp teeth and nails like ice picks, ",
        runDialog: "You stumble backwards, quickly picking yourself up as she impales your feet! ",
    },
    harpy = {
        HP: 35,
        isAlive: true,
        description: " shrieking Harpy, each cry growing louder and threatening to tear your eardrums in half, ",
        runDialog: "You turn and run, clapping your hands around your ears to keep them from bursting from the deafening shrieks and swiping claws of the Harpy! ",
    },
    giant = {
        HP: 50,
        isAlive: true,
        description: " lumbering and massive Giant, slow of wit but deadly in force, ",
        runDialog: "Overwhelmed by his size, you back up slowly, then quickly as his massive foot knocks the wind out of you!  "
    },
    troll = {
        HP: 50,
        isAlive: true,
        description: " malicious Troll, fresh from harvesting the tears of his enemies, ",
        runDialog: "Without a second thought you turn and run, screaming as you feel his giant tusks strike you in the back!  "
    },
    medusa = {
        HP: 50,
        isAlive: true,
        description: " slithering Medusa, her beautiful but dangerous face luring you towards certain death ",
        runDialog: "Avoiding eye contact, you swing around and run, hearing and feeling the hissing bites of her snake covered hair!  "
    },
    dragonKing = {
        HP: 100,
        isAlive: true,
        description: " magnificent, fire-breathing Dragon, the dreaded King of this wood who is merciless, enormous and despises unknown travelers "
    }
]

const specialItems = [
    "questionable herbs",
    "vial of blood",
    "Ichneumon armor",
    "Master Sword",
    "Philosopher's Stone",
    "large opal",
    "healing potion",
    "broekn dagger",
    "dusty emerald",
    "necklace made of teeth",
    "half-eaten sandwich"
]

const falseAlarm = [
    "Something flutters quickly past your ear, " ,
    "A sudden crack of thunder nearby startles you, ",
    "A ear-splitting shriek rings out through the air, ",
    "A thudding of large footsteps can be heard to your right, ",
    "A high-pitched maniacal laugh creeps through the air above you, ",
    "The struggling cries of something small can be heard in the near distance, ",
    "An incredibly bright flash of light streaks through the sky above, ",
    "Something dark and furry slithers across your path ahead, ",
    "A low and rumbling growl drifts over from your left, "
]

const startGame = readlineSync.question("Well, " + userName + " you have proven your bravery and determination already. There is no turning back. The only escape is death, yours or the Dragon Kings. Keep walking ('W'), attack what comes before you ('A') or try to run if you dare ('R'). You may see your health status and items you have collected by pressing 'P' when you are not in combat. Will you walk in the woods?  ")

//Walking in the Woods Function
function walkInTheWoods(probability) {
    if(probability >= 65) {
        const randomEnemyPicker =  Math.floor(Math.random() * wildEnemy.length)
        const randomEnemy = wildEnemy[randomEnemyPicker]
        const enemyReaction = readlineSync.question("As you walk through the woods, you hear something on the path before you. Suddenly, a" + randomEnemy.description + "appears in your path.  Will you attack or run?  ")
        if(enemyReaction == "A"){
            console.log("You lash out, using whatever you have available, hoping it will cause some damage. ")
            const randomEnemyDamage = Math.floor(Math.random() * 10 + 10)
            randomEnemy.HP = randomEnemy.HP - randomEnemyDamage
            console.log("Your enemy received " + randomEnemyDamage + " damage. ")
            const randomUserDamage = Math.floor(Math.random() * 10 + 5)
            user.HP = user.HP - randomUserDamage
            console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
            while(randomEnemy.HP >= 1){
                const keepAttacking = readlineSync.question("Your enemy is still alive, will you attack again or run?  ")
                if(keepAttacking === "A" || keepAttacking === "a"){
                    
                    const randomDamage = Math.floor(Math.random() * 10 + 10)
                    randomEnemy.HP = randomEnemy.HP - randomDamage
                    console.log("You lash out again, hoping this will be the last blow. Your enemy received " + randomDamage + " damage. ")
                    const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                    user.HP = user.HP - randomUserDamage
                    console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
                }
                if(keepAttacking === "R" || keepAttacking === "r") {
                    const escapeProbability = Math.floor(Math.random() * 101)
                    if(escapeProbability >= 50){
                        const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                        user.HP = user.HP - randomUserDamage
                        console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were successful in your attempt to run away.")
                        console.log('You wait a few moments, and then continue to walk in the woods.')
                        break //need to test this break to make sure it works properly
                    }
//not sure if while loop is right here
                    else {
                        console.log(randomEnemy.runDialog + 'You were unsuccessful in your attempt to run away.')
                        const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                        user.HP = user.HP - randomUserDamage
                        const keepWalking = readlineSync.question(`Would you like to attack or run again? Type 'A' to attck, 'R' to run, and type 'P' to print your `)
                        if(keepWalking === "P" || keepWalking === "p"){
                            console.log(user)
                        }
                        if(keepWalking === "R" ) {
                            console.log("You have escaped!")
                         return playGame()
                        }
                        

                    }
                }
            }
            const randomItemPicker = Math.floor(Math.random() * specialItems.length)
            const randomItem = specialItems[randomItemPicker]
            user.inventory.push(randomItem)
            console.log("Your enemy is dead. As you stand over their corpse you see something shimmering in the dark. You lean down to examine it and find a " + randomItem + " , which you place in your satchel and continue to walk in the woods.")
            if(wildEnemy.HP < 1){
                wildEnemy.isAlive = false
            }
        } 

        else{
           return runningScenarioB(enemyReaction)
        }

    } else {
        user.HP = user.HP+5
        const randomFalseAlarmPicker = Math.floor(Math.random() * 9)
        const randomFalseAlarm = falseAlarm[randomFalseAlarmPicker]
        const keepWalking = readlineSync.question(randomFalseAlarm + "and then everything is quiet.  Will you continue to walk in the woods?  ")
        if(keepWalking === "P" || keepWalking === "p"){
            console.log(user)
        }
    }

}

function runningScenarioB(randomEnemy) {
     if(reaction === "R" || reaction ==="r"){
        let running = true
        const escapeProbability = Math.floor(Math.random() * 101)
        while (running) {

            if(escapeProbability >= 50){
                const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                user.HP = user.HP - randomUserDamage
                console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were successful in your attempt to run away.")
                console.log('You wait a few moments, and then continue to walk in the woods.')
                user.HP = user.HP - Math.floor(Math.random() * 10)
                return running = false
            }
            else {
                const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                user.HP = user.HP - randomUserDamage
                console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were UNsuccessful in your attempt to run away.")
                const keepRunning = readlineSync.question(`Would you like to try to run again? Type 'R' to run again.`)

            }}
        

    }

}



function playGame() {
    while (user.HP>=1) {
        console.log("You are walking in the woods...")
        const enemyProbability = Math.floor(Math.random() * 101)
        walkInTheWoods(enemyProbability)

    }
}

if(startGame === "W" || startGame === "w"){
    return playGame()*/
/*    while (user.HP>=1) {
        console.log("You are walking in the woods...")
        const enemyProbability = Math.floor(Math.random() * 101)
        if(enemyProbability >= 65) {
            const randomEnemyPicker =  Math.floor(Math.random() * 9)
            const randomEnemy = wildEnemy[randomEnemyPicker]
            const enemyReaction = readlineSync.question("As you walk through the woods, you hear something on the path before you. Suddenly, a" + randomEnemy.description + "appears in your path.  Will you attack or run?  ")
            if(enemyReaction == "A"){
                console.log("You lash out, using whatever you have available, hoping it will cause some damage. ")
                const randomEnemyDamage = Math.floor(Math.random() * 10 + 10)
                randomEnemy.HP = randomEnemy.HP - randomEnemyDamage
                console.log("Your enemy received " + randomEnemyDamage + " damage. ")
                const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                user.HP = user.HP - randomUserDamage
                console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
                while(randomEnemy.HP >= 1){
                    const keepAttacking = readlineSync.question("Your enemy is still alive, will you attack again or run?  ")
                    if(keepAttacking === "A" || keepAttacking === "a"){
                        
                        const randomDamage = Math.floor(Math.random() * 10 + 10)
                        randomEnemy.HP = randomEnemy.HP - randomDamage
                        console.log("You lash out again, hoping this will be the last blow. Your enemy received " + randomDamage + " damage. ")
                        const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                        user.HP = user.HP - randomUserDamage
                        console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
                    }
                    if(keepAttacking === "R" || keepAttacking === "r") {
                        const escapeProbability = Math.floor(Math.random() * 101)
                        if(escapeProbability >= 50){
                            const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                            user.HP = user.HP - randomUserDamage
                            console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were successful in your attempt to run away.")
                            console.log('You wait a few moments, and then continue to walk in the woods.')
                            break //need to test this break to make sure it works properly
                        }
//not sure if while loop is right here
                        else while(escapeProbability < 50) {
                            console.log(randomEnemy.runDialog + 'You were unsuccessful in your attempt to run away.')
                            const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                            user.HP = user.HP - randomUserDamage
                            const keepWalking = readlineSync.question('Would you like to attack or run again?  ')
                            if(keepWalking === "P" || keepWalking === "p"){
                                console.log(user)
                            }
                            

                        }
                    }
                }
                const randomItemPicker = Math.floor(Math.random() * specialItems.length)
                const randomItem = specialItems[randomItemPicker]
                user.inventory.push(randomItem)
                console.log("Your enemy is dead. As you stand over their corpse you see something shimmering in the dark. You lean down to examine it and find a " + randomItem + " , which you place in your satchel and continue to walk in the woods.")
                if(wildEnemy.HP < 1){
                    wildEnemy.isAlive = false
                }
            } 
            else if(enemyReaction === "R" || enemyReaction ==="r"){
                const escapeProbability = Math.floor(Math.random() * 101)
                if(escapeProbability >= 50){
                    const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                    user.HP = user.HP - randomUserDamage
                    console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were successful in your attempt to run away.")
                    console.log('You wait a few moments, and then continue to walk in the woods.')
                    user.HP = user.HP - Math.floor(Math.random() * 10)
                }
                else {
                    const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                    user.HP = user.HP - randomUserDamage
                    console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were UNsuccessful in your attempt to run away.")
                    const keepRunning = readlineSync.question('Would you like to try to run again?  ')
                    if (keepRunning === "R" || keepAttacking === "r"){
                        const escapeProbability = Math.floor(Math.random() * 101)
                        if(escapeProbability >= 50){
                            const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                            user.HP = user.HP - randomUserDamage
                            console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were successful in your attempt to run away.")
                            console.log('You wait a few moments, and then continue to walk in the woods.')
                            user.HP = user.HP - Math.floor(Math.random() * 10)
                        }
                        else {
                            const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                            user.HP = user.HP - randomUserDamage
                            console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were UNsuccessful in your attempt to run away.")
                            const keepRunning = readlineSync.question('Would you like to try to run again?  ')
                        }
                    }
                }
            }
        } else {
            user.HP = user.HP+5
            const randomFalseAlarmPicker = Math.floor(Math.random() * 10)
            const randomFalseAlarm = falseAlarm[randomFalseAlarmPicker]
            const keepWalking = readlineSync.question(randomFalseAlarm + "and then everything is quiet.  Will you continue to walk in the woods?  ")
            if(keepWalking === "P" || keepWalking === "p"){
                console.log(user)
            }
        }

    }
    console.log("You have tragically died. Better luck next time traveler.  ")

}*/












//Running Situation
                // if (keepRunning === "R" || keepAttacking === "r"){
                //     const escapeProbability = Math.floor(Math.random() * 101)
                //     if(escapeProbability >= 50){
                //         const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                //         user.HP = user.HP - randomUserDamage
                //         console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were successful in your attempt to run away.")
                //         console.log('You wait a few moments, and then continue to walk in the woods.')
                //         user.HP = user.HP - Math.floor(Math.random() * 10)
                //     }
                //     else {
                //         const randomUserDamage = Math.floor(Math.random() * 10 + 5)
                //         user.HP = user.HP - randomUserDamage
                //         console.log(randomEnemy.runDialog + " Their attack causes " + randomUserDamage + ".  You were UNsuccessful in your attempt to run away.")
                //         const keepRunning = readlineSync.question('Would you like to try to run again?  ')
                //     }
                // }
