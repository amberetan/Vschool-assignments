const form = document.invoice

form.addEventListener("submit", function(event) {
    event.preventDefault()
    let goombaNum = parseInt(form.goombas.value)
    let bobombNum = parseInt(form.bobombs.value)
    let cheepcheepNum = parseInt(form.cheepCheeps.value)

    let totalBaddies = (goombaNum + bobombNum + cheepcheepNum)

    let totalPrice = (goombaNum * 5) + (bobombNum * 7) + (cheepcheepNum * 11)

    document.getElementById("baddies").textContent = totalBaddies + "  Caught"

    document.getElementById("price").textContent = totalPrice + "  Coins"
})