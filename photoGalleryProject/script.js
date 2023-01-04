let slides = document.querySelectorAll(".slide");

const deleteActiveAll = function(){
    slides.forEach(function(singleSlide){
        singleSlide.classList.remove("active")
    })
}

slides.forEach(function(singleSlide){
    singleSlide.addEventListener("click", function(){
        deleteActiveAll()
        singleSlide.classList.add("active")
    })
})