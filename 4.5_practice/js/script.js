const button = document.querySelector("button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".closePopup");
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");
let openMenu = document.querySelector(".openMenu");

button.addEventListener("click", function(){
    popup.style.display = "flex";
})
closePopup.addEventListener("click", function(){
    popup.style.display = "none";
})
closeMenu.addEventListener("click", function(){
  menu.style.left = "-50vw";
})
openMenu.addEventListener("click", function(){
  menu.style.left = "0"
})