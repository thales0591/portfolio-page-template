const btnRight = document.querySelector(".arrow-button.-right");
const elements = document.querySelector(".elements");
let pixels = 0;
btnRight.addEventListener("click", function() {
    pixels += 10;
    elements.style = `transform: translateX(${pixels}px)`;
})
const btnLeft = document.querySelector(".arrow-button.-left");
btnLeft.addEventListener("click", function() {
    pixels -= 10;
    elements.style = `transform: translateX(${pixels}px)`;
})