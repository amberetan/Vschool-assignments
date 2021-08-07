const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        //console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
      //showData(data)
    }
    // else {
    //     console.log("it didn't work")
    // }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

function showData(arr){
    for (let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        const h5 = document.createElement('h5')
        h1.textContent = arr[i].name
        h5.textContent = arr[i].resource_uri
        h1.appendChild(h5)
        document.body.appendChild(h1)
    }
}