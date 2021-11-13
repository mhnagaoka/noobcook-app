import { Box } from "@mui/system";
import { ErrorMessage } from "./ErrorMessage";

export default {
  title: "app/ErrorMessage",
  component: ErrorMessage,
};

const ErrorMessageTemplate = (args) => {
  return (
    <Box sx={{ width: "100%" }}>
      <ErrorMessage {...args}></ErrorMessage>
    </Box>
  );
};

export const Default = ErrorMessageTemplate.bind({});
