import { holidays } from './data/holidays.js';
import { getMessageForDate } from './data/messages.js';

const DIES_SETMANA = ['DLL', 'DM', 'DX', 'DJ', 'DV', 'DS', 'DG'];
const NOMS_MES = [
  'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
  'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre',
];


export const MESOS = [
  { year: 2026, month: 8 },  // Setembre 2026
  { year: 2026, month: 9 },  // Octubre 2026
  { year: 2026, month: 10 }, // Novembre 2026
  { year: 2026, month: 11 }, // Desembre 2026
  { year: 2027, month: 0 },  // Gener 2027
  { year: 2027, month: 1 },  // Febrer 2027
  { year: 2027, month: 2 },  // Març 2027
  { year: 2027, month: 3 },  // Abril 2027
  { year: 2027, month: 4 },  // Maig 2027
  { year: 2027, month: 5 },  // Juny 2027
];

function dateKey(year, month, day) {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

// Retorna l'índex de dia de la setmana amb DILLUNS = 0 ... DIUMENGE = 6
function weekdayMondayFirst(date) {
  const jsDay = date.getDay(); // 0 = diumenge ... 6 = dissabte
  return (jsDay + 6) % 7;
}

/**
 * Construeix el DOM d'un mes concret.
 * @param {number} year
 * @param {number} month - 0-11
 * @param {(dateKey: string) => void} onGreenDayClick
 */
export function buildMonthElement(year, month, onGreenDayClick) {
  const monthEl = document.createElement('div');
  monthEl.className = 'month';

  const title = document.createElement('h2');
  title.className = 'month-title';
  title.textContent = `${NOMS_MES[month]} ${year}`;
  monthEl.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'grid';

  DIES_SETMANA.forEach((d) => {
    const head = document.createElement('div');
    head.className = 'weekday-head';
    head.textContent = d;
    grid.appendChild(head);
  });

  const firstOfMonth = new Date(year, month, 1);
  const leadingBlanks = weekdayMondayFirst(firstOfMonth);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < leadingBlanks; i++) {
    const blank = document.createElement('div');
    blank.className = 'day day--empty';
    grid.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const key = dateKey(year, month, day);
    const weekday = weekdayMondayFirst(date); // 0=DLL,2=DX... 4=DV
    const isTargetWeekday = weekday === 0 || weekday === 2 || weekday === 4; // DLL, DX, DV
    const holidayLabel = holidays[key];

    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'day';

    const numberSpan = document.createElement('span');
    numberSpan.className = 'day-number';
    numberSpan.textContent = String(day);
    cell.appendChild(numberSpan);

    if (holidayLabel) {
      cell.classList.add('day--holiday');
      const label = document.createElement('span');
      label.className = 'day-label';
      label.textContent = holidayLabel;
      cell.appendChild(label);
      cell.disabled = true;
      cell.setAttribute('aria-label', `${day} ${NOMS_MES[month]} - ${holidayLabel}`);
    } else if (isTargetWeekday) {
      cell.classList.add('day--green');
      cell.addEventListener('click', () => onGreenDayClick(key, day, month, year));
      cell.setAttribute('aria-label', `${day} ${NOMS_MES[month]} - dia verd`);
    } else {
      cell.classList.add('day--neutral');
      cell.disabled = true;
    }

    grid.appendChild(cell);
  }

  monthEl.appendChild(grid);
  return monthEl;
}

export function getMessage(key) {
  return getMessageForDate(key);
}
