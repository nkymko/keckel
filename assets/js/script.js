function showDisplay(displayId, menuId) {
  const displays = document.getElementsByClassName("display");
  for (var i = 0; i < displays.length; i++) {
    displays[i].style.display = "none";
  }

  const displayToShow = document.getElementById(displayId);
  displayToShow.style.display = "block";

  const active = document.getElementsByClassName("menu-active");
  for (var i = 0; i < active.length; i++) {
    active[i].classList.remove("menu-active");
  }

  const menuToActive = document.getElementById(menuId);
  menuToActive.classList.add("menu-active");
}

function toggleFixed(fixedId) {
  const display = document.getElementById('fixed-nav');
  display.classList.toggle('hidden');

  const displayMenu = document.getElementsByClassName("display-fixed");
  for (var i = 0; i < displayMenu.length; i++) {
    displayMenu[i].style.display = 'none';
  }

  const menuToShow = document.getElementById(fixedId);
  menuToShow.style.display = 'block';
}

const fixedMenu = document.querySelector(".fixed-menu");

document.addEventListener("mouseup", function (event) {
  if (!fixedMenu.contains(event.target)) {
    const display = document.getElementById('fixed-nav');
    display.classList.add('hidden');
  }
});