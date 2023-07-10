const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
  document.documentElement.classList.toggle("dark");
});


document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-button");
  var navbar = document.getElementById("navbar-sticky");

  toggleButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    var target = event.target;
    var isNavbar = target.closest("#navbar-sticky");
    var isToggleButton = target.closest("#toggle-button");

    if (!isNavbar && !isToggleButton) {
      navbar.classList.add("hidden");
    }
  });
});