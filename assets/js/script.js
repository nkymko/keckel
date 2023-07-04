function showDisplay(displayId, menuId) {
  let displays = document.getElementsByClassName("display");
  for (let i = 0; i < displays.length; i++) {
    displays[i].style.display = "none";
  }

  let displayToShow = document.getElementById(displayId);
  displayToShow.style.display = "block";

  let active = document.getElementsByClassName("menu-active");
  for (let i = 0; i < active.length; i++) {
    active[i].classList.remove("menu-active");
  }

  let menuToActive = document.getElementById(menuId);
  menuToActive.classList.add("menu-active");
}
