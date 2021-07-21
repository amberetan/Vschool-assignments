let clickCount = document.getElementById("clickCount")
document.addEventListener("click", function(){
    let mouseClicks = Number(localStorage.getItem('mouseClicks'))

    let newMouseClicks = mouseClicks + 1
    localStorage.setItem("mouseClicks", newMouseClicks)
    clickCount.textContent = newMouseClicks
})
console.log(localStorage.getItem("mouseClicks"))