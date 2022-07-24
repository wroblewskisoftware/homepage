console.log("Cześć! Ten kod jest już w repozytorium Git.");

let imageButton = document.querySelector(".js-header__imageButton");
let imageParagraph = document.querySelector(".js-header__imageParagraph");
let backgroundButton = document.querySelector(".js-header__backgroundButton");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-header__themeName");

imageButton.addEventListener("click", () => {
    imageParagraph.remove();
});

backgroundButton.addEventListener("click", () => {
    backgroundButton.classList.toggle("header__backgroundButton--dark");
    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
});