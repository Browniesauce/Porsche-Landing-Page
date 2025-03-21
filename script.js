const bars = document.querySelector(".Menu");
const sidebar = document.querySelector(".Side-Bar-Content");
const closingButton = document.querySelector(".Closing-Button");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

const Nine11 = document.querySelector(".NineEleven")
const Var911 = document.querySelector(".sub-menu-911")

Nine11.addEventListener("click" , () => {
  Var911.classList.toggle("open-menu");
});