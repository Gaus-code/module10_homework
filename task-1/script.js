const myButton = document.getElementById("myButton");
const icon = document.getElementById("icon");

myButton.addEventListener("click", function() {
    icon.classList.toggle("icon_01");
    icon.classList.toggle("icon_02");
});