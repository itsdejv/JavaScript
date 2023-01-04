const doubleSlider = document.querySelector(".doubleBanner")
const leftSlider = document.querySelector(".leftbar")
const rightSlider = document.querySelector(".rightbar")
const arrowUp = document.querySelector(".arrowup")
const arrowDown = document.querySelector(".arrowdown")
const numOfSlides = rightSlider.querySelectorAll("div").length

let numberActiveSlide = 0

leftSlider.style.top = `-${(numOfSlides - 1)*100}vh`

arrowUp.addEventListener("click", function(){
    changeSlide("up")
})

arrowDown.addEventListener("click", function(){
    changeSlide("down")
})

function changeSlide(direction){
    const sliderHeight = doubleSlider.clientHeight

    if(direction === "up"){
        numberActiveSlide++
        if(numberActiveSlide > numOfSlides - 1){
            numberActiveSlide = 0
        }
    } else{
        numberActiveSlide--
        if(numberActiveSlide < 0){
            numberActiveSlide = numOfSlides - 1
        }
    }

    rightSlider.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`

    leftSlider.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`
}