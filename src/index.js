// import moment from 'moment';
// import timerTpl from './templates/timer.hbs';
import './sass/main.scss';

const timerRef = document.querySelector('#timer-1');
const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minutesRef = document.querySelector('[data-value="mins"]');
const secondsRef = document.querySelector('[data-value="secs"]');

// const timerMarkup = timerTpl();
// timerRef.insertAdjacentHTML('beforeend', timerMarkup);

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const timer = {
  start() {
    const targetDate = new Date('Sep 27, 2021');

    setInterval(() => {
      const currentDate = Date.now();
      const time = targetDate - currentDate;
      const times = getTimeComponents(time);

      updateTimerFace(times);

      console.log(times);
    }, 1000);
  },
};

timer.start();

function updateTimerFace({ days, hours, mins, secs }) {
  // timerRef.textContent = `${days}:${hours}:${mins}:${secs}`;
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${mins}`;
  secondsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
