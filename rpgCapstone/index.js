const readlineSync = require('readline-sync');
const userName = readline.question("Hello, weary traveler. Welcome to the Realm of Darkness. Beyond lay treasures and nightmares beyond your imagination. Give me your name if you are foolish enough to enter: ")





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
        addHP: 15,
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
        addStrength: 15,
        caption: "  It has a rough exterior, but makes for cunning camouflaging.  "
    },
    smallDagger = {
        addStrength: 2,
        caption: "  A rusty blade, probably left behind by a less-cunning, fool-hardy traveler.  "
    },
    masterSword = {
        addStrength = 20,
        caption: "  It is well-balanced, always sharp and fills you with the righteous wind of the Goddess.  "
    },
    knightsEmerald = {
        aidEscape: 15,
        caption: "  A glinting green behind the dirt, you feel luck and speed surge through your hand as you hold it.  "
    },
    wizardsOpal = {
        addStrength = 25,
        caption: "  Everchanging, it has a familiar feel to it, as if you've always held it.  "  
    },
    sirensRuby = {
        aidEscape: -15,
        caption: "  An eerie feeling pricks up your neck, like all eyes in the forest are suddenly aware of you.  "
    }
]