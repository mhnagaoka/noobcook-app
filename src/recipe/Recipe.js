import { useCallback, useState } from "react";
import { RecipeStep } from "./RecipeStep";

export function Recipe({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  const handleFirst = useCallback(() => setCurrentStep(0), [setCurrentStep]);
  const handleBack = useCallback(() => setCurrentStep(currentStep - 1), [
    currentStep,
    setCurrentStep,
  ]);
  const handleForward = useCallback(() => setCurrentStep(currentStep + 1), [
    currentStep,
    setCurrentStep,
  ]);
  const handleLast = useCallback(() => setCurrentStep(steps.length - 1), [
    setCurrentStep,
    steps.length,
  ]);

  return (
    <RecipeStep
      title={step.title}
      description={step.description}
      image={step.image}
      remainingTime={step.totalTime}
      totalTime={step.totalTime}
      simple={false}
      stepNumber={currentStep + 1}
      stepCount={steps.length}
      enableFirst={currentStep > 0}
      enableBack={currentStep > 0}
      enableForward={currentStep < steps.length - 1}
      enableLast={currentStep < steps.length - 1}
      onFirst={handleFirst}
      onBack={handleBack}
      onForward={handleForward}
      onLast={handleLast}
    />
  );
}
