var inputText = document.getElementById('inputText')
var inputButton = document.getElementById('inputButton')

function storeInfo() {
    console.log(inputText.value)
}
inputButton.addEventListener("click", storeInfo)