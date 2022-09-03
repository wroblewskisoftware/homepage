{
  const welcome = () => {
    console.log("Cześć! Ten kod jest już w repozytorium Git.");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-header__themeName");
    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark")
      ? "jasne"
      : "ciemne";
  };

  const toggleImage = () => {
    const image = document.querySelector(".js-header__image");
    const firstImageSrc = "images/image.jpg";
    const firstImageAlt = "Mężczyzna nad jeziorem";
    const secondImageSrc = "images/image2.jpg";
    const secondImageAlt = "Mężczyzna na deskorolce";

    switch (image.alt) {
      case firstImageAlt:
        image.src = secondImageSrc;
        image.alt = secondImageAlt;
        return;

      case secondImageAlt:
        image.src = firstImageSrc;
        image.alt = firstImageAlt;
        return;
    }
  };

  const init = () => {
    const backgroundButton = document.querySelector(
      ".js-header__button--background"
    );
    backgroundButton.addEventListener("click", toggleBackground);

    const imageButton = document.querySelector(".js-header__button--image");
    imageButton.addEventListener("click", toggleImage);

    welcome();
  };

  init();
}
