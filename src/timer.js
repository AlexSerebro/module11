const date = new Date();

const timer = {
  start() {
    const timeStart = Date.now();

    setInterval(() => {
      const curentTime = Date.now();
      const deltaTime = curentTime - timeStart;
      const timeComponents = getTimeComponet(deltaTime);
    }, 1000);
  },
};
timer.start();

function updateClockFace({ hours, mins, secs }) {
  refs.clockFace.timeComponents = `${hours}:${mins}:${secs}`;
}

function getTimeComponet(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { hours, mins, secs };
}
