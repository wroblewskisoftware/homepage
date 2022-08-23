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

    const hideImage = () => {
        const imageParagraph = document.querySelector(".js-header__imageParagraph");
        const imageStatus = document.querySelector(".js-header__imageStatus");
        imageParagraph.classList.toggle("header__imageParagraph--hidden");
        imageStatus.innerText = imageParagraph.classList.contains("header__imageParagraph--hidden") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const backgroundButton = document.querySelector(".js-header__button--background");
        backgroundButton.addEventListener("click", toggleBackground);

        const imageButton = document.querySelector(".js-header__button--image");
        imageButton.addEventListener("click", hideImage);

        welcome();
    };

    init();
};