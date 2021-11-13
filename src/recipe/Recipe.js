import { useCallback, useState } from "react";
import { RecipeStep } from "./RecipeStep";

export function Recipe({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  const handleBack = useCallback(() => setCurrentStep(currentStep - 1), [
    currentStep,
  ]);
  const handleForward = useCallback(() => setCurrentStep(currentStep + 1), [
    currentStep,
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
      enableBack={currentStep > 0}
      enableForward={currentStep < steps.length - 1}
      onBack={handleBack}
      onForward={handleForward}
    />
  );
}
