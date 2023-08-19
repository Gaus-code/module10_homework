const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const btn = document.querySelector(".button");

btn.addEventListener("click", getCoords = () =>
    alert(`height is ${screenHeight}, width is ${screenWidth}`)
);