import { Box, Typography } from "@mui/material";
import AppLayout from "../Components/LayOut/AppLayout";
import { grayColor } from "../Components/Constants/Color";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography padding={"2rem"} variant="h4" textAlign={"center"}>
        Select to Chat
      </Typography>
    </Box>
  );
};
export default AppLayout()(Home);
