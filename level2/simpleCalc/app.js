const formAdd = document.addition
const formSub = document.subtraction
const formMult = document.multiplication

formAdd.addEventListener("submit", function(event){
    event.preventDefault()

    let addNum1 = parseInt(formAdd.addNum1.value)
    let addNum2 = parseInt(formAdd.addNum2.value)

    formAdd.addNum1.value = ""
    formAdd.addNum2.value = "" 

    const h2 = document.createElement("h2")
    const clearBtn = document.createElement("button")

    h2.textContent = addNum1 += addNum2
    clearBtn.textContent = "clear"

    clearBtn.style.marginLeft = "20px"

    h2.appendChild(clearBtn)
    document.getElementById("add").append(h2)

    clearBtn.addEventListener("click", function(){
        document.getElementById("add").removeChild(h2)
    })

})

formSub.addEventListener("submit", function(event){
    event.preventDefault()

    let subNum1 = parseInt(formSub.subNum1.value)
    let subNum2 = parseInt(formSub.subNum2.value)

    formSub.subNum1.value = ""
    formSub.subNum2.value = "" 

    const h2 = document.createElement("h2")
    const clearBtn = document.createElement("button")

    h2.textContent = subNum1 -= subNum2
    clearBtn.textContent = "clear"

    clearBtn.style.marginLeft = "20px"

    h2.appendChild(clearBtn)
    document.getElementById("sub").append(h2)

    clearBtn.addEventListener("click", function(){
        document.getElementById("sub").removeChild(h2)
    })

})

formMult.addEventListener("submit", function(event){
    event.preventDefault()

    let multNum1 = parseInt(formMult.multNum1.value)
    let multNum2 = parseInt(formMult.multNum2.value)

    formMult.multNum1.value = ""
    formMult.multNum2.value = "" 

    const h2 = document.createElement("h2")
    const clearBtn = document.createElement("button")

    h2.textContent = multNum1 * multNum2
    clearBtn.textContent = "clear"

    clearBtn.style.marginLeft = "20px"

    h2.appendChild(clearBtn)
    document.getElementById("mult").append(h2)

    clearBtn.addEventListener("click", function(){
        document.getElementById("mult").removeChild(h2)
    })


   
})
