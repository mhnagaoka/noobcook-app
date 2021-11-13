import { Display } from "./Display";

export default {
  title: "timer/Display",
  component: Display,
  argTypes: {
    millis: "number",
  },
};

const DisplayTemplate = (args) => <Display {...args} />;

export const OneSecond = DisplayTemplate.bind({});
OneSecond.args = {
  millis: 1000,
};

export const TwoSeconds = DisplayTemplate.bind({});
TwoSeconds.args = {
  millis: 2000,
};

export const TenSeconds = DisplayTemplate.bind({});
TenSeconds.args = {
  millis: 10000,
};

export const OneMinute = DisplayTemplate.bind({});
OneMinute.args = {
  millis: 60000,
};

export const OneMinuteOneSecond = DisplayTemplate.bind({});
OneMinuteOneSecond.args = {
  millis: 61000,
};

export const OneHour = DisplayTemplate.bind({});
OneHour.args = {
  millis: 3600000,
};

export const TwoHours = DisplayTemplate.bind({});
TwoHours.args = {
  millis: 7200000,
};
