const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockFase: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalID = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.getTimeComponet(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }
    const timeStart = Date.now();
    this.isActive = true;

    this.intervalID = setInterval(() => {
      const curentTime = Date.now();
      const deltaTime = curentTime - timeStart;
      const time = this.getTimeComponet(deltaTime);
      // console.log(time);

      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
    this.isActive = false;
    const time = this.getTimeComponet(0);
    this.onTick(time);
  }
  getTimeComponet(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateClockFace({ hours, mins, secs }) {
  refs.clockFase.textContent = `${hours}:${mins}:${secs}`;
}

const timer = new Timer({
  onTick: updateClockFace,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// const date = new Date();

// const timer = {
//   intervalID: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const timeStart = Date.now();
//     this.isActive = true;

//     this.intervalID = setInterval(() => {
//       const curentTime = Date.now();
//       const deltaTime = curentTime - timeStart;
//       const { hours, mins, secs } = getTimeComponet(deltaTime);
//       console.log(`${hours}:${mins}:${secs}`);
//       updateClockFace(hours, mins, secs);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalID);
//     this.isActive = false;
//   },
// };
// // timer.start();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponet(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }
