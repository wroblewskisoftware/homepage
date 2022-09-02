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
    const image = document.querySelector(".js-header__firstImage");
    const firstImage =
      "https://wroblewski82.github.io/homepage/images/image.jpg";
    const secondImage =
      "https://wroblewski82.github.io/homepage/images/image2.jpg";

    switch (image.src) {
      case firstImage:
        image.src = secondImage;
        return;

      case secondImage:
        image.src = firstImage;
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
