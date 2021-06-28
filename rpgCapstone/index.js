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
        description: " hairy, drooling Werewolf, with a sneering glint in his eye, "
    },
    minotaur  = {
        HP: 25,
        isAlive: true,
        description: " hulking Minotaur, with a large bloodstained axe in each hand, "
    },
    goblin = {
        HP: 25,
        isAlive: true,
        description: " haggard and nasty Goblin, clad with a club spiked with his enemy's bones, "
    },
    vampire = {
        HP: 35,
        isAlive: true,
        description: " gaunt Vampire, staring out at you with his yellow eyes -- he had yellow eyes, so help me lard, YELLOW EYES!! -- "
    },
    banshee = {
        HP: 35,
        isAlive: true,
        description: " ghostly, skeletal Banshee, with long sharp teeth and nails like ice picks, "
    },
    harpy = {
        HP: 35,
        isAlive: true,
        description: " shrieking Harpy, each cry growing louder and threatening to tear your eardrums in half, "
    },
    giant = {
        HP: 50,
        isAlive: true,
        description: " lumbering and massive Giant, slow of wit but deadly in force, "
    },
    troll = {
        HP: 50,
        isAlive: true,
        description: " malicious Troll, fresh from harvesting the tears of his enemies, "
    },
    medusa = {
        HP: 50,
        isAlive: true,
        description: " slithering Medusa, her luring but dangerous beauty edging you towards certain death "
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

const falseAlarms = [
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
    let isPLayerAlive = true
    while (isPLayerAlive) {
        console.log("You are walking in the woods...")
        const enemyProbability = Math.floor(Math.random() * 101)
        if(enemyProbability >= 50) {
            const randomEnemyPicker =  Math.floor(Math.random() * 10)
            const randomEnemy = wildEnemy[randomEnemyPicker]
            const walking = readlineSync.question("As you walk through the woods, you hear something on the path before you. Suddenly, a" + randomEnemy.description + "appears in your path.  Will you attack or run?  ")
        } else {
            const randomFalseAlarmPicker = Math.floor(Math.random() * 10)
            const randomFalseAlarm = falseAlarm[randomFalseAlarmPicker]
            const keepWalking = readlineSync.question(randomFalseAlarm + "and then everything is quiet.  Will you continue to walk in the woods?  ")
        }

    }

}




