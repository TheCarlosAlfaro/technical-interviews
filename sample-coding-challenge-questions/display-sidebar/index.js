const menuButton = document.querySelector(".menu-button");
const menuContainer = document.querySelector(".menu__container");
const closeMenuIcon = document.querySelector(".close-menu-icon");

menuButton.addEventListener("click", function (e) {
  if (menuButton.innerHTML === "Show Menu") {
    menuButton.innerHTML = "Close Menu";
  } else {
    menuButton.innerHTML = "Show Menu";
  }
  menuContainer.classList.toggle("is-open");
});

closeMenuIcon.addEventListener("click", function (e) {
  menuContainer.classList.remove("is-open");
});
