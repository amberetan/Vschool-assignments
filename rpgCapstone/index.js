const readlineSync = require('readline-sync');

const userName = readlineSync.question("Hello, weary traveler. Welcome to the Realm of Darkness. Beyond lay treasures and nightmares beyond your imagination. Give me your name if you are foolish enough to enter: ")
const user = {
    userName: userName,
    isAlive: true,
    HP: 100,
    inventory: {

    }
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
    }
]

const specialItems = [
    healingPotion = {
        addHP: 100,
        caption: "  The inscription reads: For use on flesh wounds.  "
    },
    questionableHerbs = {
        addHP: 2,
        caption: "  The inscription reads: Use with caution, unknown effects.  "
    },
    vialOfBlood = {
        addHP: -10,
        caption: "  The inscription reads: From Jerry. Don't ask.  "
    },
    ichneumonArmor = {
        addStrength: 50,
        caption: "  It has a rough exterior, but makes for cunning camouflaging.  "
    },
    smallDagger = {
        addStrength: 10,
        caption: "  A rusty blade, probably left behind by a less-cunning, fool-hardy traveler.  "
    },
    masterSword = {
        addStrength: 50,
        caption: "  It is well-balanced, always sharp and fills you with the righteous wind of the Goddess.  "
    },
    knightsEmerald = {
        aidEscape: 15,
        caption: "  A glinting green behind the dirt, you feel luck and speed surge through your hand as you hold it.  "
    },
    wizardsOpal = {
        addStrength: 50,
        caption: "  Everchanging, it has a familiar feel to it, as if you've always held it.  "  
    },
    sirensRuby = {
        aidEscape: -15,
        caption: "  An eerie feeling pricks up your neck, like all eyes in the forest are suddenly aware of you.  "
    }
]

const dragonKing = {
    HP: 200,
    isAlive: true,
}

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

const startGame = readlineSync.question("Well, " + userName + " you have proven your bravery and determination already. There is no turning back. The only escape is death, yours or the Dragon Kings. Keep walking ('W'), attack what comes before you ('A') or try to run if you dare ('R'). You may see your health status and items you have collected by pressing 'P'. Will you walk in the woods?  ")

if (startGame === "W" || startGame === "w"){
    while (user.isAlive) {
        console.log("You are walking in the woods...")
        const enemyProbability = Math.floor(Math.random() * 101)
        if(enemyProbability >= 50) {
            const randomEnemyPicker =  Math.floor(Math.random() * 9)
            const randomEnemy = wildEnemy[randomEnemyPicker]
            const enemyReaction = readlineSync.question("As you walk through the woods, you hear something on the path before you. Suddenly, a" + randomEnemy.description + "appears in your path.  Will you attack or run?  ")
            if(enemyReaction == "A"){
                console.log("You lash out, using whatever you have available, hoping it will do something. ")
                const randomEnemyDamage = Math.floor(Math.random() * 10 + 10)
                randomEnemy.HP = randomEnemy.HP - randomEnemyDamage
                console.log("Your enemy recieved " + randomEnemyDamage + " damage. ")
                const randomUserDamage = Math.floor(Math.random() * 10 + 10)
                user.HP = user.HP - randomUserDamage
                console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
                while(randomEnemy.HP >= 1){
                    const keepAttacking = readlineSync.question("Your enemy is still alive, will you attack again or run?  ")
                    if(keepAttacking === "A" || keepAttacking === "a"){
                        console.log("You lash out again, hoping this will be the last blow. ")
                        const randomDamage = Math.floor(Math.random() * 10 + 10)
                        randomEnemy.HP = randomEnemy.HP - randomDamage
                        console.log("Your enemy recieved " + randomDamage + " damage. ")
                        const randomUserDamage = Math.floor(Math.random() * 10 + 10)
                        user.HP = user.HP - randomUserDamage
                        console.log("When you have finished your attack, your enemy strikes back, dealing you " + randomUserDamage + " in damage.  ")
                    }
                    if(keepAttacking === "R" || keepAttacking === "r") {
                        const escapeProbability = Math.floor(Math.random() * 101)
                        if(escapeProbability >= 25){
                            console.log(randomEnemy.runDialog + ' You were successful in your attempt to run away.')
                            conosle.log('You wait a few moments, and then continue to walk in the woods.')
                            user.HP = user.HP - Math.floor(Math.random() * 10)
                        }
                        else {
                            console.log(randomEnemy.runDialog + 'You were unsuccessful in your attempt to run away.')
                            user.HP = user.HP - Math.floor(Math.random() * 10)
                            const keepWalking = readlineSync.question('Would you like to attack or run again?  ')
                        }
                    }
                }
                else {
                    console.log("Your enemy is dead. Will you walk in the woods?  ")
                }
            } 
            else if(enemyReaction === "R" || enemyReaction ==="r"){
                const escapeProbability = Math.floor(Math.random() * 101)
                if(escapeProbability >= 25){
                console.log(randomEnemy.runDialog + ' You were successful in your attempt to run away.')
                conosle.log('You wait a few moments, and then continue to walk in the woods.')
                user.HP = user.HP - Math.floor(Math.random() * 10)
                }
                else {
                    console.log(randomEnemy.runDialog + 'You were unsuccessful in your attempt to run away.')
                    user.HP = user.HP - Math.floor(Math.random() * 10)
                    const keepWalking = readlineSync.question('Would you like to attack or run again?  ')
                    
                }
            }
        } else {
            user.HP = user.HP+5
            const randomFalseAlarmPicker = Math.floor(Math.random() * 10)
            const randomFalseAlarm = falseAlarm[randomFalseAlarmPicker]
            const keepWalking = readlineSync.question(randomFalseAlarm + "and then everything is quiet.  Will you continue to walk in the woods?  ")
        }

    }

}




