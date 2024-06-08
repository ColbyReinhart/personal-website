"use strict;"

const navMenu = document.querySelector("nav");

document.querySelector("#nav-bars").addEventListener("click", () => {
    navMenu.style.display = "flex";
});
document.querySelector("#exit-nav").addEventListener("click", () => {
    navMenu.style.display = "none";
});