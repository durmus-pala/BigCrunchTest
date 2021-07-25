const navbarbtn = document.getElementById("navbarbtn");
const navbarContainer = document.querySelector(".my-navbar-container");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const crossIcon = document.getElementById("crosIcon");
let navbarClicked = false;
navbarbtn.addEventListener("click", () => {
  navbarClicked = !navbarClicked;
  if (navbarClicked) {
    navbarContainer.classList.add("myShow");
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "block";
  } else {
    navbarContainer.classList.remove("myShow");
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
});
