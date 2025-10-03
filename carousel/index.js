const slideshow_container = document.querySelector(".slideshow-container")
const left_button = document.getElementById("left")
const right_button = document.getElementById("right")

let position = 0;

right_button.addEventListener("click", ()=> {
    if (position <= -320) {
        position = 0;
        slideshow_container.style.transform = `translateX(${position}vw)`
    } 
    else{
        position -= 80;
        slideshow_container.style.transform = `translateX(${position}vw)`
    }
})

left_button.addEventListener("click", ()=> {
    if (position >= 0) {
        position = -320;
        slideshow_container.style.transform = `translateX(${position}vw)`
    } 
    else{
        position += 80;
        slideshow_container.style.transform = `translateX(${position}vw)`
    }
})