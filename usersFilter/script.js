const resultUserList = document.querySelector(".user-list")
const filteringUserInput = document.querySelector(".input-filter")
const userList = [];

getData()

filteringUserInput.addEventListener("input", function(event){
    dataFilter(event.target.value)
})

async function getData(){
    const allUsers = await fetch("https://randomuser.me/api?results=50")
    let data = await allUsers.json()
    resultUserList.innerHTML = ""

    data.results.forEach(function(singlePerson){
        const li = document.createElement("li")

        li.innerHTML = `
            <img src ="${singlePerson.picture.large}" alt="${singlePerson.name.first}}">
            <div class="user-information">
                <h3>${singlePerson.name.first} ${singlePerson.name.last}</h3>
                <p>${singlePerson.location.city}, ${singlePerson.location.country}</p>
            </div>
        `

        resultUserList.appendChild(li)
        userList.push(li)
    })
}

function dataFilter(inputText){
    userList.forEach(function(singlePerson){
        if(singlePerson.innerText.toLowerCase().includes(inputText.toLowerCase())){
            singlePerson.classList.remove("hide")
        } else{
            singlePerson.classList.add("hide")
        }
    })
}