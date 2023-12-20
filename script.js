var toggleBtn = document.querySelector("#toggle-btn");
var aside = document.querySelector("#side-menu");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  e.stopPropagation();
  if (aside.classList.contains("-right-[250px]")) {
    aside.classList.remove("-right-[250px]");
    aside.classList.add("right-0");
  } else {
    aside.classList.remove("right-0");
    aside.classList.add("-right-[250px]");
  }
}
