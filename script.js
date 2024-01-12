/** SMALL SCREEN SIDE MENU CLOSING  */
document.addEventListener("scroll", () => {
  const aside = document.querySelector("aside");
  if (!aside) return;

  if (aside.classList.contains("left-0")) {
    aside.classList.replace("left-0", "-left-[75%]");
  }
});

/** JUMP TO ELEMENTS WILL BE DELAYED ON SMALL SCREEN */
function delayedScroll(event, targetId) {
  event.preventDefault();
  const delay = 500;

  setTimeout(() => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      toggleHamburger();
    }
  }, delay);
}

/** TOGGLE SIDE MENU IN SMALL SCREENS */
function toggleHamburger() {
  const asideMenu = document.querySelector("aside");

  if (!asideMenu) return;

  if (asideMenu.classList.contains("left-0")) {
    asideMenu.classList.replace("left-0", "-left-[75%]");
  } else {
    asideMenu.classList.replace("-left-[75%]", "left-0");
  }
}
