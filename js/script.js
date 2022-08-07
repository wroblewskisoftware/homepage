console.log("Cześć! Ten kod jest już w repozytorium Git.");

let imageButton = document.querySelector(".js-header__button--image");
let imageParagraph = document.querySelector(".js-header__imageParagraph");
let imageStatus = document.querySelector(".js-header__imageStatus");
let backgroundButton = document.querySelector(".js-header__button--background");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-header__themeName");

imageButton.addEventListener("click", () => {
    imageParagraph.classList.toggle("header__imageParagraph--hidden");
    imageStatus.innerText = imageParagraph.classList.contains("header__imageParagraph--hidden") ? "Pokaż" : "Ukryj";
});

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
});