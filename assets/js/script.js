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
  const display = document.getElementById("fixed-nav"); // main background
  const menuToShow = document.getElementById(fixedId); // menu list
  const currentMenu = document.querySelector('.curr-act'); // current active menu
  const displayMenu = document.getElementsByClassName("display-fixed");

  if (currentMenu != null) {
    currentMenu.classList.remove('curr-act');
  }

  if (currentMenu === menuToShow) {
    display.classList.add("hidden");
    menuToShow.classList.remove('curr-act');

    for (var i = 0; i < displayMenu.length; i++) {
      displayMenu[i].style.display = "none";
    }

  } else {
    display.classList.remove("hidden");
    

    for (var i = 0; i < displayMenu.length; i++) {
      displayMenu[i].style.display = "none";
    }

    menuToShow.style.display = "block";
    menuToShow.classList.add('curr-act');
  }
}

const fixedMenu = document.querySelector(".fixed-menu");

document.addEventListener("mouseup", function (event) {
  if (!fixedMenu.contains(event.target)) {
    const display = document.getElementById("fixed-nav");
    display.classList.add("hidden");
  }
});
