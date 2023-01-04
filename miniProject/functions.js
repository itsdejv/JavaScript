/*
    Načítání dat z Local Storage
    Pokud neexistují vytvořit nové prázdné pole
*/
const getSavedNames = function(WhereInLocalStorage){
    const namesDatabaseLocalStorage = localStorage.getItem(WhereInLocalStorage)
    if(namesDatabaseLocalStorage !== null){
        return JSON.parse(namesDatabaseLocalStorage)
    } else{
        return []
    }
}

/*
    Funkce pro použití při stisknití tlačítka submit
    Ukládá do localStorage z inputu
*/

const saveInputToLocalStorage = function(WhereInLocalStorage, SendingToLocalStorage){
    localStorage.setItem(WhereInLocalStorage, JSON.stringify(SendingToLocalStorage))
}

/*
    Generování HTML struktury DIV -> BUTTON, SPAN
*/
const generateHTMLStructure = function(ListOfNames){
    const newDiv = document.createElement("div")
    const newButton = document.createElement("button")
    const newLink = document.createElement("a")

    //nastavení mazacího tlačítka
    newButton.textContent = "Vymazat obsah"
    newDiv.appendChild(newButton)

    newButton.addEventListener("click",function(){
        findByIDAndRemove(names, ListOfNames.id)
        saveInputToLocalStorage("names", names)
        loadAgain()
    })

    //nastavení vypsání jména
    newLink.textContent = ListOfNames.firstName

    if(ListOfNames.adult === true){
        newLink.classList.add("adult")
    } else{
        newLink.classList.add("not-adult")
    }

    newDiv.appendChild(newLink)
    newLink.setAttribute("href", `edit.html#${ListOfNames.id}`)

    return newDiv
}

/*
    Podle ID najdeme jméno a následně ho vymažeme
*/
const findByIDAndRemove = function(whereFinding, id){
    const index = whereFinding.findIndex(function(nameToCheck){
        return nameToCheck.id === id
    })
    
    if(index > -1){
        whereFinding.splice(index, 1)
    }
}

/*
    Aktualizace jmen po smazání jména
*/
const loadAgain = function(){
    document.querySelector("#showNamesList").innerHTML = ""

    let newData = getSavedNames("names")

    newData.forEach(function(singleName){
        const newContent = generateHTMLStructure(singleName)
        document.querySelector("#showNamesList").appendChild(newContent)
    })
}