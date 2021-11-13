import { Loader } from "./Loader";

export default {
  title: "app/Loader",
  component: Loader,
  argTypes: {
    url: {
      control: {
        type: "text",
      },
    },
  },
};

const LoaderTemplate = (args) => <Loader {...args} />;

export const LoadFromSpreadsheet = LoaderTemplate.bind({});
LoadFromSpreadsheet.args = {
  url:
    "https://opensheet.vercel.app/1bYA5NIfIFGe9cu6SDX9hucmnpip7AnyVkBdzmJwK_FM/1",
};
