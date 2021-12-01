import { useCallback, useEffect, useState } from "react";
import { RecipeStep } from "./RecipeStep";
import {
  CoreTimer,
  getElapsedTime,
  isRunning,
  pause,
  reset,
  start,
} from "../timer/CoreTimer";

export function Recipe({ steps }) {
  // Cria um CoreTimer para cada step que requer controle de tempo
  const [timers, setTimers] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const newTimers = steps.map((step) => {
      if (Number(step.totalTime) > 0) {
        return CoreTimer();
      }
    });
    setTimers(newTimers);
  }, [steps]);

  const active = timers[currentStep] && isRunning(timers[currentStep]);

  useEffect(() => {
    if (!active) {
      return;
    }
    const intervalId = setInterval(() => {
      const newTimers = [...timers];
      setTimers(newTimers);
      console.log("ping");
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timers, active]);

  const step = steps[currentStep];
  const handlePlusOne = useCallback(() => {}, [timers, currentStep]);
  const handleMinusOne = useCallback(() => {}, [timers, currentStep]);
  const handleReset = useCallback(() => {
    const resetTimer = reset(timers[currentStep]);
    const newTimers = [...timers];
    newTimers[currentStep] = resetTimer;
    setTimers(newTimers);
  }, [timers, currentStep]);
  const handleStart = useCallback(() => {
    const startedTimer = start(timers[currentStep]);
    const newTimers = [...timers];
    newTimers[currentStep] = startedTimer;
    setTimers(newTimers);
  }, [timers, currentStep]);
  const handlePause = useCallback(() => {
    const pausedTimer = pause(timers[currentStep]);
    const newTimers = [...timers];
    newTimers[currentStep] = pausedTimer;
    setTimers(newTimers);
  }, [timers, currentStep]);
  const handleFirst = useCallback(() => setCurrentStep(0), [setCurrentStep]);
  const handleBack = useCallback(() => setCurrentStep(currentStep - 1), [
    currentStep,
  ]);
  const handleForward = useCallback(() => setCurrentStep(currentStep + 1), [
    currentStep,
  ]);
  const handleLast = useCallback(() => setCurrentStep(steps.length - 1), [
    steps.length,
  ]);

  return (
    <RecipeStep
      title={step.title}
      description={step.description}
      image={step.image}
      remainingTime={
        timers[currentStep]
          ? step.totalTime - getElapsedTime(timers[currentStep])
          : null
      }
      totalTime={step.totalTime}
      running={timers[currentStep] ? isRunning(timers[currentStep]) : false}
      simple={false}
      stepNumber={currentStep + 1}
      stepCount={steps.length}
      enableFirst={currentStep > 0}
      enableBack={currentStep > 0}
      enableForward={currentStep < steps.length - 1}
      enableLast={currentStep < steps.length - 1}
      onPlusOne={handlePlusOne}
      onMinusOne={handleMinusOne}
      onReset={handleReset}
      onStart={handleStart}
      onPause={handlePause}
      onFirst={handleFirst}
      onBack={handleBack}
      onForward={handleForward}
      onLast={handleLast}
    />
  );
}
