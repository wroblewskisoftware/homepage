{
    const welcome = () => {
        console.log("Cześć! Ten kod jest już w repozytorium Git.");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-header__themeName");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const toggleImage = () => {
        const firstImage = document.querySelector(".js-header__firstImage");
        const secondImage = document.querySelector(".js-header__secondImage");
        firstImage.classList.toggle("header__firstImage--hidden");
        secondImage.classList.toggle("header__secondImage--hidden");
    };

    const init = () => {
        const backgroundButton = document.querySelector(".js-header__button--background");
        backgroundButton.addEventListener("click", toggleBackground);

        const imageButton = document.querySelector(".js-header__button--image");
        imageButton.addEventListener("click", toggleImage);

        welcome();
    };

    init();
};