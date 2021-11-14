import { describe } from "jest-circus";
import CoreTimer from "./CoreTimer";

describe("CoreTimer suite", () => {
  test("New CoreTimer should not be running", () => {
    const timer = CoreTimer();
    expect(timer.isRunning()).toBe(false);
  });

  test("New CoreTimer elapsed time should be zero", () => {
    const timer = CoreTimer();
    expect(timer.getElapsedTime()).toBe(0);
  });

  test("Pausing a new CoreTimer should not do anything", () => {
    const timer = CoreTimer();
    timer.pause();
    expect(timer.isRunning()).toBe(false);
    expect(timer.getElapsedTime()).toBe(0);
  });

  test("Resetting a new CoreTimer should not do anything", () => {
    const timer = CoreTimer();
    timer.reset();
    expect(timer.isRunning()).toBe(false);
    expect(timer.getElapsedTime()).toBe(0);
  });

  test("Elapsed time after running CoreTimer for 1 second", async () => {
    const timer = CoreTimer();
    timer.start();
    await new Promise((r) => setTimeout(r, 1000));
    expect(timer.isRunning()).toBe(true);
    expect(timer.getElapsedTime()).toBeGreaterThanOrEqual(1000);
    expect(timer.getElapsedTime()).toBeLessThan(11000);
  });

  test("Resetting a running CoreTimer should bring it back to zero, not running", async () => {
    const timer = CoreTimer();
    timer.start();
    await new Promise((r) => setTimeout(r, 1000));
    timer.reset();
    expect(timer.isRunning()).toBe(false);
    expect(timer.getElapsedTime()).toBe(0);
  });

  test("Elapsed time after running CoreTimer for 1 second and pausing", async () => {
    const timer = CoreTimer();
    timer.start();
    await new Promise((r) => setTimeout(r, 1000));
    timer.pause();
    expect(timer.isRunning()).toBe(false);
    expect(timer.getElapsedTime()).toBeGreaterThanOrEqual(1000);
    expect(timer.getElapsedTime()).toBeLessThan(11000);
  });

  test("Pausing should stop counting elapsed time", async () => {
    const timer = CoreTimer();
    timer.start();
    await new Promise((r) => setTimeout(r, 500));
    timer.pause();
    await new Promise((r) => setTimeout(r, 500));
    expect(timer.isRunning()).toBe(false);
    expect(timer.getElapsedTime()).toBeGreaterThanOrEqual(500);
    expect(timer.getElapsedTime()).toBeLessThan(600);
  });

  test("Starting a paused CoreTimer should resume counting elapsed time", async () => {
    const timer = CoreTimer();
    timer.start();
    await new Promise((r) => setTimeout(r, 500));
    timer.pause();
    await new Promise((r) => setTimeout(r, 500));
    timer.start();
    await new Promise((r) => setTimeout(r, 500));
    expect(timer.isRunning()).toBe(true);
    expect(timer.getElapsedTime()).toBeGreaterThanOrEqual(1000);
    expect(timer.getElapsedTime()).toBeLessThan(1100);
  });
});
