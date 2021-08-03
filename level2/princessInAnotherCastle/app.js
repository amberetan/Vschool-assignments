class Player {
    constructor(name, totalCoins = 0, status = "Big", hasStar = false){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = true
    }
    setName(){
        this.name = namePicked //not sure how to implement this
    }
    gotHit(){
        if (this.hasStar === true) {
            console.log(`Your star protected you!`)
            return this.hasStar = false
        }
        if (this.status === "Powered Up"){
            return this.status = "Big"
        }
        else if (this.status === "Big"){
            return this.status = "Small"
        }
        else if (this.status === "Small"){
            return this.status = "Dead"
        }
        if (this.status === "Dead"){
            return this.gameStatus = false
        }
        
    }
    gotPowerup(){
        if (this.status === "Small"){
             return this.status = "Big"
        }
        else if (this.status === "Big"){
             return this.status = "Powered Up"
        }
        else if (this.status === "Powered Up"){
            console.log(`Congratulations! You got a star!`)
            return this.hasStar = true
        }
    }
    addCoin(){
        return this.totalCoins++
    }
    print(){
    return console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \n`)
    }
}

const newPlayer = new Player("Mario")
newPlayer.print()
function randomNum(){
    const randomNum = Math.floor(Math.random() * 3)
//    console.log(`the random number is ${randomNum}`)
    if (randomNum === 0) {
        newPlayer.gotHit()
    }
    else if (randomNum === 1) {
        newPlayer.gotPowerup()
    }
    else if (randomNum === 2) {
        newPlayer.addCoin()
    }

    newPlayer.print()

    if (newPlayer.status === "Dead") {
        clearInterval(startGame)
        
        console.log(`You lost the game, you died! \nName: ${newPlayer.name} \nStatus: ${newPlayer.status} \nTotal Coins: ${newPlayer.totalCoins} \nYour total score was ${newPlayer.totalCoins}`)
    }
}

let startGame = setInterval(randomNum, 2000)

