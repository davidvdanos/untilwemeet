const TARGET_GREECE_LOCAL = '2026-05-12T19:30:00+03:00';
const targetDate = new Date(TARGET_GREECE_LOCAL).getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const statusMessageEl = document.getElementById('status-message');

function pad(value, digits = 2) {
  return String(value).padStart(digits, '0');
}

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = '000';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    statusMessageEl.textContent = 'The moment is here.';
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days, 3);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
