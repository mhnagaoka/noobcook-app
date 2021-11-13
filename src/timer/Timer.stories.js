import { Timer } from "./Timer";

export default {
  title: "timer/Timer",
  component: Timer,
  argTypes: {
    remainingTime: "number",
    totalTime: "number",
    running: "boolean",
    simple: "boolean",
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
