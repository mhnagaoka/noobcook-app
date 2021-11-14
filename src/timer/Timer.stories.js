import { Timer } from "./Timer";

export default {
  title: "timer/Timer",
  component: Timer,
  argTypes: {
    remainingTime: { control: "number" },
    totalTime: { control: "number" },
    running: { control: "boolean" },
    simple: { control: "boolean" },
    onPlusOne: { action: "onPlusOne" },
    onMinusOne: { action: "onMinusOne" },
    onReset: { action: "onReset" },
    onStart: { action: "onStart" },
    onPause: { action: "onPause" },
  },
};

const TimerTemplate = (args) => <Timer {...args} />;

export const FullTimer = TimerTemplate.bind({});
FullTimer.args = {
  totalTime: 60000,
  remainingTime: 45000,
  running: false,
  simple: false,
};

export const SimpleTimer = TimerTemplate.bind({});
SimpleTimer.args = {
  totalTime: 60000,
  remainingTime: 45000,
  running: false,
  simple: true,
};
