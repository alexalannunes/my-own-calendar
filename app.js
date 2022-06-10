const tbody = document.getElementById('tbody');
const previois = document.getElementById("previous");
const next = document.getElementById("next");

const date = new Date();

const YEAR = date.getFullYear();
let MONTH = date.getMonth();
const TODAY = date.getDate();

const lastDayOfMonth = (year, month) => {
  return 32 - new Date(year, month, 32).getDate()
}

Date.prototype.getWeekOfMonth = function () {
  var firstDay = new Date(this.setDate(1)).getDay();
  var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
  return Math.ceil((firstDay + totalDays) / 7);
}

const showCalendar = (year, month) => {
  tbody.innerHTML = '';

  const firstDayOfWeek = new Date(year, month).getDay();

  let dateCount = 1;

  for (let row = 0; row < new Date(year, month).getWeekOfMonth(); row++) {
    const rowTR = document.createElement('tr');

    for (let column = 0; column < 7; column++) {

      if (row === 0 && column < firstDayOfWeek) {
        const columnTD = document.createElement('td');
        columnTD.textContent = '';
        rowTR.append(columnTD);
      }
      else if (dateCount > lastDayOfMonth(year, month)) {
        break;
      }
      else {
        const columnTD = document.createElement("td");
        columnTD.textContent = dateCount;
        rowTR.appendChild(columnTD);
        dateCount++;
      }

    }

    tbody.append(rowTR);
  }
}

showCalendar(YEAR, MONTH);
previois.addEventListener("click", function () {
  MONTH -= 1;
  showCalendar(YEAR, MONTH);
});
next.addEventListener("click", function () {
  MONTH += 1;
  showCalendar(YEAR, MONTH);
});
