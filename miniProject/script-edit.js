let nameID = location.hash.substring(1)
let names = getSavedNames("names")

let searchedObject = names.find(function(singleObject){
    return singleObject.id === nameID
})

if(searchedObject === undefined){
    location.assign("index.html")
}

document.querySelector("#changeNameInputID").value = searchedObject.firstName

document.querySelector("#changingForm").addEventListener("submit", function(event){
    event.preventDefault()
    
    searchedObject.firstName = event.target.elements.changeNameInput.value

    saveInputToLocalStorage("names", names)
})

window.addEventListener("storage", function(event){
    if(event.key === "names"){
        names = JSON.parse(event.newValue)
    }
    
    let searchedObject = names.find(function(singleObject){
        return singleObject.id === nameID
    })
    
    if(searchedObject === undefined){
        location.assign("index.html")
    }
    
    document.querySelector("#changeNameInputID").value = searchedObject.firstName
})