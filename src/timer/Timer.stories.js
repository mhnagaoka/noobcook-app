import { Timer } from "./Timer";

export default {
  title: "timer/Timer",
  component: Timer,
  argTypes: {
    totalTime: "number",
    running: "boolean",
    simple: "boolean",
  },
};

const TimerTemplate = (args) => <Timer {...args} />;

export const FullNinetyHourTimer = TimerTemplate.bind({});
FullNinetyHourTimer.args = {
  totalTime: 90 * 60,
  running: false,
  simple: false,
};

export const FullOneHourTimer = TimerTemplate.bind({});
FullOneHourTimer.args = {
  totalTime: 60,
  running: false,
  simple: false,
};

export const FullOneMinuteTimer = TimerTemplate.bind({});
FullOneMinuteTimer.args = {
  totalTime: 1,
  running: false,
  simple: false,
};

export const FullTwoSecondTimer = TimerTemplate.bind({});
FullTwoSecondTimer.args = {
  totalTime: 2 / 60,
  running: false,
  simple: false,
};

export const SimpleTimer = TimerTemplate.bind({});
SimpleTimer.args = {
  totalTime: 1,
  running: false,
  simple: true,
};
