const hamburger = document.querySelector(".hamburger-toggle");
const sideMenu = document.querySelector(".side-menu");
const closeIcon = document.getElementById("close");

hamburger.onclick = function() {
  sideMenu.classList.add("active");
}

closeIcon.onclick = function() {
  sideMenu.classList.remove("active");
}
