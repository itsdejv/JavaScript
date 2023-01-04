const endlessText = document.querySelector("#endless-text-heading")
const endlessTextInput = document.querySelector("#endless-text-speed-input")
const endlessTextContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, at accusamus deleniti odio voluptatibus eos cumque perspiciatis iste odit commodi, explicabo ut libero ipsam ullam facilis! Iusto corporis tempore doloremque. Dolores corporis odio illo fugiat. Voluptatum esse at harum odio consectetur quaerat quae laboriosam nihil iure porro similique nisi reiciendis, voluptatibus, corrupti eius maiores. Natus soluta placeat hic aspernatur dolorum. Ipsam quam maiores alias unde laudantium, voluptate, recusandae nobis eligendi at dolore deleniti! In omnis sequi ad accusantium nisi reiciendis, voluptas sed et repudiandae ea, repellat labore voluptatibus, aspernatur nobis. Veritatis porro eum excepturi maxime rerum ab laudantium, corporis molestiae quibusdam beatae eveniet aliquam impedit vel, quis reprehenderit cupiditate asperiores quo, ut optio? In et ratione reiciendis corrupti, excepturi pariatur? Magnam libero culpa quam excepturi, numquam aperiam nihil aspernatur, eius accusamus corrupti, illo dolore. Quas accusantium, repudiandae explicabo perspiciatis ad voluptatibus maiores error amet nulla necessitatibus sit dolorem blanditiis. Fugiat!"
let indexOfText = 1
let speedOfEndlessText = 500/endlessTextInput.value

const endlessTextFunction = function(){
    if(indexOfText < endlessTextContent.length + 1){
        endlessText.textContent = endlessTextContent.slice(0,indexOfText)
        indexOfText++
        setTimeout(endlessTextFunction,speedOfEndlessText)
    } else{
        indexOfText = 0
        setTimeout(endlessTextFunction,speedOfEndlessText)
    }
}

endlessTextInput.addEventListener("input",function(){
    speedOfEndlessText = 500/endlessTextInput.value * 2
})

endlessTextFunction()