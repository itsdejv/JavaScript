let selectParagraphInput = document.querySelector("#inputText")
let selectInputText = document.querySelector("#testingInput")

selectInputText.addEventListener("input", function(event){
    selectParagraphInput.textContent = event.target.value
})