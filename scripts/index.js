// Toggle Menu Function
// Variable Declaration
const menuIcon = document.querySelector(".mb-menu");
const navItems = document.querySelector(".nav-items");
const closeIcon = "/assets/shared/icon-close.svg";
const hamburgerMenu = "/assets/shared/icon-hamburger.svg";

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("show");

  // Switch Menu Icons if Nav is Opened
  if (navItems.classList.contains("show")) {
    menuIcon.setAttribute("src", closeIcon);
  } else menuIcon.setAttribute("src", hamburgerMenu);
});
