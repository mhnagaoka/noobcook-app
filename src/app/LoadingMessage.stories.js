import { Box } from "@mui/system";
import { LoadingMessage } from "./LoadingMessage";

export default {
  title: "app/LoadingMessage",
  component: LoadingMessage,
};

const LoadingMessageTemplate = (args) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LoadingMessage {...args}></LoadingMessage>
    </Box>
  );
};

export const Default = LoadingMessageTemplate.bind({});
