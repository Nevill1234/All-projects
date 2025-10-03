const btn = document.getElementById("home-button")

const menu = document.getElementById("nav-menu")

const close = document.getElementById("Close-button")

const btn1 = document.getElementById("right")

const btn2 = document.getElementById("left")

const img = document.getElementById("img")

btn.addEventListener("click", () => {
    menu.style.left = "0";

})

close.addEventListener("click", () => {
    menu.style.left = "100vw"

})

btn1.addEventListener("click", function() {
    img.src = "./stefano-d-andrea-UXIsw4vK1gM-unsplash.jpg"
});

btn2.addEventListener("click", function() {
    img.src = "./alfred-schrock-UiKWDzkMV_o-unsplash.jpg"
});