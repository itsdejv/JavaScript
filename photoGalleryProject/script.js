let slides = document.querySelectorAll(".slide");

const deleteActiveAll = function(){
    slides.forEach(function(singleSlide){
        singleSlide.classList.add("active")
    })
}

slides.forEach(function(singleSlide){
    singleSlide.addEventListener("click", function(){
        deleteActiveAll()
        singleSlide.classList.remove("active")
    })
})