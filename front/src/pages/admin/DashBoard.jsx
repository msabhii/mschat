import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AdminLayout from "../../Components/LayOut/AdminLayout";
import { AdminPanelSettings } from "@mui/icons-material";
import moment from "moment";

//! ---------------------Import Statments------------------------------------

const DashBoard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1rem",
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AdminPanelSettings sx={{ fontSize: "3rem" }} />
        <input type="text" placeholder="search" />
        <button>button</button>
        <Typography>{moment().format("MMMM Do YYY")}</Typography>
      </Stack>
    </Paper>
  );
  return (
    <>
      <AdminLayout>
        <Container comopent={"main"}>{Appbar}</Container>
      </AdminLayout>
    </>
  );
};

export default DashBoard;
