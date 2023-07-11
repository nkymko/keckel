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
  const currentMenu = document.querySelector(".curr-act"); // current active menu
  const displayMenu = document.getElementsByClassName("display-fixed");

  if (currentMenu != null) {
    currentMenu.classList.remove("curr-act");
  }

  if (currentMenu === menuToShow) {
    display.classList.add("hidden");
    menuToShow.classList.remove("curr-act");

    for (var i = 0; i < displayMenu.length; i++) {
      displayMenu[i].style.display = "none";
    }
  } else {
    display.classList.remove("hidden");

    for (var i = 0; i < displayMenu.length; i++) {
      displayMenu[i].style.display = "none";
    }

    menuToShow.style.display = "block";
    menuToShow.classList.add("curr-act");
  }
}

const fixedMenu = document.querySelector(".fixed-menu");

document.addEventListener("mouseup", function (event) {
  if (!fixedMenu.contains(event.target)) {
    const display = document.getElementById("fixed-nav");
    display.classList.add("hidden");
  }
});

// Kalender
var calendar = document.getElementById('calendar');
var currentYear, currentMonth;

function generateCalendar(year, month) {
    currentYear = year;
    currentMonth = month;

    var daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the total number of days in the current month

    var table = document.createElement('table');
    table.className = 'table table-borderless';

    // Generate the table header with navigation buttons
    var tableHead = document.createElement('thead');
    var tableHeadRow = document.createElement('tr');

    // Create and append the "Previous" button
    var previousBtn = document.createElement('th');
    previousBtn.textContent = '<';
    previousBtn.className = 'calendar-nav-btn';
    previousBtn.addEventListener('click', function() {
        var prevMonth = new Date(currentYear, currentMonth - 1);
        generateCalendar(prevMonth.getFullYear(), prevMonth.getMonth());
    });
    tableHeadRow.appendChild(previousBtn);

    // Create and append the month and year display
    var monthYearCell = document.createElement('th');
    monthYearCell.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearCell.className = 'calendar-month-year';
    monthYearCell.setAttribute('colspan', '5');
    tableHeadRow.appendChild(monthYearCell);

    // Create and append the "Next" button
    var nextBtn = document.createElement('th');
    nextBtn.textContent = '>';
    nextBtn.className = 'calendar-nav-btn';
    nextBtn.addEventListener('click', function() {
        var nextMonth = new Date(currentYear, currentMonth + 1);
        generateCalendar(nextMonth.getFullYear(), nextMonth.getMonth());
    });
    tableHeadRow.appendChild(nextBtn);

    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);

    // Generate the table body for day names and calendar days
    var tableBody = document.createElement('tbody');

    // Create the day name row
    var dayNameRow = document.createElement('tr');
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(function (weekday) {
        var dayNameCell = document.createElement('td');
        dayNameCell.textContent = weekday;
        dayNameRow.appendChild(dayNameCell);
    });
    tableBody.appendChild(dayNameRow);

    // Generate the calendar days
    var dayCount = 1;
    for (var i = 0; i < 6; i++) {
        var tableBodyRow = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
            var tableBodyCell = document.createElement('td');
            if (i === 0 && j < new Date(year, month, 1).getDay()) {
                // Fill empty cells before the first day of the month
                tableBodyCell.innerHTML = '&nbsp;';
            } else if (dayCount > daysInMonth) {
                // Fill empty cells after the last day of the month
                tableBodyCell.innerHTML = '&nbsp;';
            } else {
                tableBodyCell.textContent = dayCount;
                if (isCurrentDate(year, month, dayCount)) {
                    tableBodyCell.className = 'current-day';
                }
                dayCount++;
            }
            tableBodyRow.appendChild(tableBodyCell);
        }
        tableBody.appendChild(tableBodyRow);
    }
    table.appendChild(tableBody);

    calendar.innerHTML = '';
    calendar.appendChild(table);
}

function isCurrentDate(year, month, day) {
    var currentDate = new Date();
    return (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
    );
}

function swipeHandler(event) {
  var touchstartX = 0;
  var touchendX = 0;

  calendar.addEventListener(
    "touchstart",
    function (event) {
      touchstartX = event.touches[0].clientX;
    },
    false
  );

  calendar.addEventListener(
    "touchend",
    function (event) {
      touchendX = event.changedTouches[0].clientX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    if (touchendX < touchstartX) {
      // Swiped left, move to next month
      var nextMonth = new Date(currentYear, currentMonth + 1);
      generateCalendar(nextMonth.getFullYear(), nextMonth.getMonth());
    }

    if (touchendX > touchstartX) {
      // Swiped right, move to previous month
      var prevMonth = new Date(currentYear, currentMonth - 1);
      generateCalendar(prevMonth.getFullYear(), prevMonth.getMonth());
    }
  }
}

var date = new Date(); // Get current date
generateCalendar(date.getFullYear(), date.getMonth());
swipeHandler();
