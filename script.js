const bars = document.querySelector(".Menu");
const sidebar = document.querySelector(".Side-Bar-Content");
const closingButton = document.querySelector(".Closing-Button");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
