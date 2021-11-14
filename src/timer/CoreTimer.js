function CoreTimer() {
  let elapsedTime = 0;
  let startTime = 0;
  let pauseTime = 0;
  let paused = false;
  let running = false;
  const start = () => {
    if (!running) {
      const now = Date.now();
      startTime = now;
      running = true;
      paused = false;
    } else if (paused) {
      const now = Date.now();
      startTime = now;
      elapsedTime += now - pauseTime;
      paused = false;
    }
  };
  const pause = () => {
    if (running && !paused) {
      pauseTime = Date.now();
      paused = true;
    }
  };
  const reset = () => {
    elapsedTime = 0;
    startTime = 0;
    pauseTime = 0;
    paused = false;
    running = false;
  };
  const isRunning = () => running && !paused;
  const getElapsedTime = () => {
    if (running) {
      if (paused) {
        return elapsedTime + pauseTime - startTime;
      }
      return elapsedTime + Date.now() - startTime;
    }
    return elapsedTime;
  };
  return {
    start,
    pause,
    reset,
    isRunning,
    getElapsedTime,
  };
}

export default CoreTimer;
