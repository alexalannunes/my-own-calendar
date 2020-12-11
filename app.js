const tbody = document.getElementById("tbody");
const SEMANA = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const date = new Date();
let ANO = date.getFullYear();
let MES = date.getMonth();
const HOJE = date.getDate();
const start = 1608433200000;
const end = 1608865200000;

const previois = document.getElementById("previous");
const next = document.getElementById("next");

function diasMes(ano, mes) {
  return 32 - new Date(ano, mes, 32).getDate();
}

function showCalendar(ano, mes) {
  tbody.innerHTML = "";
  // primeiro dia da semana
  let primeiroDia = new Date(ano, mes).getDay();

  let date = 1;

  for (let i = 0; i < 6; i++) {
    // cria uma row
    const row = document.createElement("tr");

    // cria as celulas preechendo com as data
    for (let j = 0; j < 7; j++) {
      // preenche com vazio as datas antes
      if (i === 0 && j < primeiroDia) {
        const cell = document.createElement("td");
        cell.textContent = "";
        row.appendChild(cell);
      } else if (date > diasMes(ano, mes)) {
        break;
      } else {
        const cell = document.createElement("td");
        cell.textContent = date;
        const time = new Date(ano, mes, date).getTime();
        cell.setAttribute("data-date", time);
        if (date == HOJE) {
          cell.style.background = "red";
        }
        if (time >= start && time < end) {
          cell.style.background = "#09c";
        }
        row.appendChild(cell);
        date++;
      }
    }

    tbody.appendChild(row);
  }
}

showCalendar(ANO, MES);

previois.addEventListener("click", function () {
  MES -= 1;
  showCalendar(ANO, MES);
});
next.addEventListener("click", function () {
  MES += 1;
  showCalendar(ANO, MES);
});
