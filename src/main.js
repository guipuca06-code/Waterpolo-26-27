import './style.css';
import { buildMonthElement, getMessage, MESOS } from './calendar.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page">
    <header class="topbar">
      <h1>Calendari 2026 - 2027</h1>
    </header>

    <nav class="month-nav">
      <button id="prev-btn" class="nav-btn" aria-label="Mes anterior">←</button>
      <select id="month-select"></select>
      <button id="next-btn" class="nav-btn" aria-label="Mes seguent">→</button>
    </nav>

    <div id="month-container"></div>

    <p class="legend">
      <span class="legend-dot legend-dot--green"></span> Dilluns / Dimecres / Divendres
      <span class="legend-dot legend-dot--red"></span> Festiu
    </p>
  </div>

  <div id="modal-overlay" class="modal-overlay modal-overlay--hidden">
    <div class="modal" role="dialog" aria-modal="true">
      <button id="modal-close" class="modal-close" aria-label="Tancar">×</button>
      <h3 id="modal-title"></h3>
      <p id="modal-message"></p>
    </div>
  </div>
`;

const monthContainer = document.querySelector('#month-container');
const monthSelect = document.querySelector('#month-select');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

const modalOverlay = document.querySelector('#modal-overlay');
const modalTitle = document.querySelector('#modal-title');
const modalMessage = document.querySelector('#modal-message');
const modalClose = document.querySelector('#modal-close');

const NOMS_MES = [
  'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
  'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre',
];

let currentIndex = 0;

MESOS.forEach(({ year, month }, i) => {
  const opt = document.createElement('option');
  opt.value = String(i);
  opt.textContent = `${NOMS_MES[month]} ${year}`;
  monthSelect.appendChild(opt);
});

function openModal(dateKey, day, month, year) {
  modalTitle.textContent = `${day} ${NOMS_MES[month]} ${year}`;
  modalMessage.textContent = getMessage(dateKey);
  modalOverlay.classList.remove('modal-overlay--hidden');
}

function closeModal() {
  modalOverlay.classList.add('modal-overlay--hidden');
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function renderMonth(index) {
  currentIndex = index;
  monthSelect.value = String(index);
  monthContainer.innerHTML = '';
  const { year, month } = MESOS[index];
  const monthEl = buildMonthElement(year, month, openModal);
  monthContainer.appendChild(monthEl);

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === MESOS.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) renderMonth(currentIndex - 1);
});
nextBtn.addEventListener('click', () => {
  if (currentIndex < MESOS.length - 1) renderMonth(currentIndex + 1);
});
monthSelect.addEventListener('change', (e) => {
  renderMonth(Number(e.target.value));
});

renderMonth(0);
