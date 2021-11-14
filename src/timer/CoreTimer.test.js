import * as CoreTimer from "./CoreTimer";

describe("CoreTimer suite", () => {
  test("New CoreTimer should not be running", () => {
    const timer = CoreTimer.CoreTimer();
    expect(CoreTimer.isRunning(timer)).toBe(false);
  });

  test("New CoreTimer elapsed time should be zero", () => {
    const timer = CoreTimer.CoreTimer();
    expect(CoreTimer.getElapsedTime(timer)).toBe(0);
  });

  test("Pausing a new CoreTimer should not do anything", () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.pause(timer);
    expect(CoreTimer.isRunning(timer2)).toBe(false);
    expect(CoreTimer.getElapsedTime(timer2)).toBe(0);
  });

  test("Resetting a new CoreTimer should not do anything", () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.reset();
    expect(CoreTimer.isRunning(timer2)).toBe(false);
    expect(CoreTimer.getElapsedTime(timer2)).toBe(0);
  });

  test("Elapsed time after running CoreTimer for 1 second", async () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.start(timer);
    await new Promise((r) => setTimeout(r, 1000));
    expect(CoreTimer.isRunning(timer2)).toBe(true);
    expect(CoreTimer.getElapsedTime(timer2)).toBeGreaterThanOrEqual(1000);
    expect(CoreTimer.getElapsedTime(timer2)).toBeLessThan(11000);
  });

  test("Resetting a running CoreTimer should bring it back to zero, not running", async () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.start(timer);
    await new Promise((r) => setTimeout(r, 1000));
    const timer3 = CoreTimer.reset(timer2);
    expect(CoreTimer.isRunning(timer3)).toBe(false);
    expect(CoreTimer.getElapsedTime(timer3)).toBe(0);
  });

  test("Elapsed time after running CoreTimer for 1 second and pausing", async () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.start(timer);
    await new Promise((r) => setTimeout(r, 1000));
    const timer3 = CoreTimer.pause(timer2);
    expect(CoreTimer.isRunning(timer3)).toBe(false);
    expect(CoreTimer.getElapsedTime(timer3)).toBeGreaterThanOrEqual(1000);
    expect(CoreTimer.getElapsedTime(timer3)).toBeLessThan(11000);
  });

  test("Pausing should stop counting elapsed time", async () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.start(timer);
    await new Promise((r) => setTimeout(r, 500));
    const timer3 = CoreTimer.pause(timer2);
    await new Promise((r) => setTimeout(r, 500));
    expect(CoreTimer.isRunning(timer3)).toBe(false);
    expect(CoreTimer.getElapsedTime(timer3)).toBeGreaterThanOrEqual(500);
    expect(CoreTimer.getElapsedTime(timer3)).toBeLessThan(600);
  });

  test("Starting a paused CoreTimer should resume counting elapsed time", async () => {
    const timer = CoreTimer.CoreTimer();
    const timer2 = CoreTimer.start(timer);
    await new Promise((r) => setTimeout(r, 500));
    const timer3 = CoreTimer.pause(timer2);
    await new Promise((r) => setTimeout(r, 500));
    const timer4 = CoreTimer.start(timer3);
    await new Promise((r) => setTimeout(r, 500));
    expect(CoreTimer.isRunning(timer4)).toBe(true);
    expect(CoreTimer.getElapsedTime(timer4)).toBeGreaterThanOrEqual(1000);
    expect(CoreTimer.getElapsedTime(timer4)).toBeLessThan(1100);
  });
});
