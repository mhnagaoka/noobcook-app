export function CoreTimer() {
  return {
    elapsedTime: 0,
    startTime: 0,
    paused: false,
    running: false,
  };
}

export function start(coreTimer) {
  if (!coreTimer.running) {
    const now = Date.now();
    return {
      ...coreTimer,
      startTime: now,
      running: true,
      paused: false,
    };
  } else if (coreTimer.paused) {
    const now = Date.now();
    return {
      ...coreTimer,
      startTime: now,
      paused: false,
    };
  }
  return coreTimer;
}

export function pause(coreTimer) {
  if (coreTimer.running && !coreTimer.paused) {
    return {
      ...coreTimer,
      elapsedTime: coreTimer.elapsedTime + Date.now() - coreTimer.startTime,
      paused: true,
    };
  }
  return coreTimer;
}

export function reset(coreTimer) {
  return {
    ...coreTimer,
    elapsedTime: 0,
    startTime: 0,
    paused: false,
    running: false,
  };
}

export function isRunning(coreTimer) {
  return coreTimer.running && !coreTimer.paused;
}

export function getElapsedTime(coreTimer) {
  if (coreTimer.running && !coreTimer.paused) {
    return coreTimer.elapsedTime + Date.now() - coreTimer.startTime;
  }
  return coreTimer.elapsedTime;
}
