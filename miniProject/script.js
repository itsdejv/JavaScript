let names = getSavedNames("names")
let checkAdult = document.querySelector("#namesDatabaseFormAdultCheckForm")

document.querySelector("#namesDatabaseForm").addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.userFirstNameForm.value,
        adult: checkAdult.checked
    })

    event.target.elements.userFirstNameForm.value = ""
    checkAdult.checked = false

    saveInputToLocalStorage("names", names)
})

document.querySelector("#showNamesButton").addEventListener("click", function(){

    //Mazání předešlých výsledků
    document.querySelector("#showNamesList").innerHTML = ""

    //Generování nových výsledků
    namesFromLocalStorageJSON = JSON.parse(localStorage.getItem("names"))
    namesFromLocalStorageJSON.forEach(function(singleName){
        const generateHTML = generateHTMLStructure(singleName)
        document.querySelector("#showNamesList").appendChild(generateHTML)
    })
})

window.addEventListener("storage", function(event){
    this.location.reload()
})