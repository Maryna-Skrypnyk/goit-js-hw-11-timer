import './sass/main.scss';

const timerFace = document.querySelector('#timer-1');

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const timer = {
  start() {
    const targetDate = new Date('2021, Jul 17');

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
  timerFace.textContent = `${days}:${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
