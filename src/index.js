// import timerTpl from './templates/timer.hbs';
import './sass/main.scss';

class CountdownTimer {
  constructor({ selector, targetDate, onTick, onChangeLabel }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.onTick = onTick;
    this.onChangeLabel = onChangeLabel;
  }

  startTimer() {
    this.start();
    this.intervalId = setInterval(() => {
      this.start();
    }, 1000);
  }

  start() {
    const currentDate = Date.now();
    const deltaTime = this.targetDate - currentDate;
    if (deltaTime <= 0) {
      clearInterval(this.intervalId);
      return;
    }
    const timeComponents = this.getTimeComponents(deltaTime);
    this.onTick(timeComponents);
    this.onChangeLabel(timeComponents);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 27, 2021'),
  // targetDate: new Date('May 21, 2021 22:25:00'),
  onTick: updateTimerFace,
  onChangeLabel: updateLabelFace,
});

function updateTimerFace({ days, hours, mins, secs }) {
  document.querySelector('[data-value="days"]').textContent = `${days}`;
  document.querySelector('[data-value="hours"]').textContent = `${hours}`;
  document.querySelector('[data-value="mins"]').textContent = `${mins}`;
  document.querySelector('[data-value="secs"]').textContent = `${secs}`;
}

function updateLabelFace({ days, hours, mins, secs }) {
  `${days}` == 1
    ? (document.querySelector('[data-label-days]').textContent = 'Day')
    : (document.querySelector('[data-label-days]').textContent = 'Days');
  `${hours}` == 1
    ? (document.querySelector('[data-label-hours]').textContent = 'Hour')
    : (document.querySelector('[data-label-hours]').textContent = 'Hours');
  `${mins}` == 1
    ? (document.querySelector('[data-label-mins]').textContent = 'Minute')
    : (document.querySelector('[data-label-mins]').textContent = 'Minutes');
  `${secs}` == 1
    ? (document.querySelector('[data-label-secs]').textContent = 'Second')
    : (document.querySelector('[data-label-secs]').textContent = 'Seconds');
}

timer.startTimer();

// const timerRef = document.querySelector('#timer-1');
// const daysRef = document.querySelector('[data-value="days"]');
// const hoursRef = document.querySelector('[data-value="hours"]');
// const minutesRef = document.querySelector('[data-value="mins"]');
// const secondsRef = document.querySelector('[data-value="secs"]');

// // const timerMarkup = timerTpl();
// // timerRef.insertAdjacentHTML('beforeend', timerMarkup);

// const timer = {
//   intervalId: null,

//   startTimer() {
//     const targetDate = new Date('Sep 27, 2021');

//     this.intervalId = setInterval(() => {
//       const currentDate = Date.now();
//       const deltaTime = targetDate - currentDate;
//       const timeComponents = getTimeComponents(deltaTime);
//       // const { days, hours, mins, secs } = getTimeComponents(deltaTime);

//       updateTimerFace(timeComponents);

//       console.log(timeComponents);
//       // console.log(`${days}:${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
// };

// timer.startTimer();

// function updateTimerFace({ days, hours, mins, secs }) {
//   // timerRef.textContent = `${days}:${hours}:${mins}:${secs}`;
//   daysRef.textContent = `${days}`;
//   hoursRef.textContent = `${hours}`;
//   minutesRef.textContent = `${mins}`;
//   secondsRef.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }
