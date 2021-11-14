import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { RecipeStep } from "./RecipeStep";

export default {
  title: "recipe/RecipeStep",
  component: RecipeStep,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    image: {
      control: "text",
    },
    remainingTime: { control: "number" },
    totalTime: { control: "number" },
    simple: { control: "boolean" },
    stepNumber: { control: "number" },
    stepCount: { control: "number" },
    enableFirst: {
      control: "boolean",
    },
    enableBack: {
      control: "boolean",
    },
    enableForward: {
      control: "boolean",
    },
    enableLast: {
      control: "boolean",
    },
    onPlusOne: {
      action: "onPlusOne",
    },
    onMinusOne: {
      action: "onMinusOne",
    },
    onReset: {
      action: "onReset",
    },
    onStart: {
      action: "onStart",
    },
    onPause: {
      action: "onPause",
    },
    onFirst: {
      action: "onFirst",
    },
    onBack: {
      action: "onBack",
    },
    onForward: {
      action: "onForward",
    },
    onLast: {
      action: "onLast",
    },
  },
};

const RecipeStepTemplate = (args) => {
  return (
    <Box sx={{ width: "100%" }}>
      <RecipeStep {...args}></RecipeStep>
    </Box>
  );
};

export const SimpleStep = RecipeStepTemplate.bind({});
SimpleStep.args = {
  title: "Step 1",
  description: "Retire do forno e coloque sobre a grade de resfriamento",
  stepNumber: 1,
  stepCount: 3,
  enableFirst: false,
  enableBack: false,
  enableForward: true,
  enableLast: true,
};

export const ImageStep = RecipeStepTemplate.bind({});
ImageStep.args = {
  title: "Step 1",
  description: "Adicione todos os ingredientes secos e misture bem",
  image: "https://media.giphy.com/media/6N4nyvDBFRql3tbDf3/giphy.gif",
  stepNumber: 2,
  stepCount: 3,
  enableFirst: true,
  enableBack: true,
  enableForward: true,
  enableLast: true,
};

export const TimerStep = RecipeStepTemplate.bind({});
TimerStep.args = {
  title: "Step 1",
  description: "Aguarde até dobrar de tamanho (a 24°C demora cerca de 1 hora)",
  image: "https://media.giphy.com/media/M6qXhksKxDfry/giphy.gif",
  remainingTime: 3600000,
  totalTime: 3600000,
  simple: false,
  stepNumber: 5,
  stepCount: 10,
  enableFirst: true,
  enableBack: true,
  enableForward: false,
  enableLast: false,
};
