import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdminLayout from "../../Components/LayOut/AdminLayout";
import {
  AdminPanelSettings,
  Group as GroupIcon,
  Person as PersonIcon,
  Widgets,
} from "@mui/icons-material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../Components/Styles/StyleComponents";

//! ---------------------Import Statments------------------------------------

const DashBoard = () => {
  //* appbar
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
        <AdminPanelSettings sx={{ fontSize: "2rem" }} />
        <Box width={"100%"}>
          <SearchField
            sx={{
              margin: "1rem",
            }}
            placeholder="Search ..."
          />
          <CurveButton className="text-white ">Search</CurveButton>
          <Box flexGrow={"1"} />
        </Box>
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
        >
          {moment().format("MMMM Do YYY")}
        </Typography>
        <NotificationsIcon
          sx={{
            display: { xs: "none", md: "block" },
          }}
        />
      </Stack>
    </Paper>
  );

  // * widgets
  const Widgets = <>widgets</>;

  return (
    <>
      <AdminLayout>
        <Container comopent={"main"}>
          {Appbar}
          <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
            <Paper
              elevation={3}
              sx={{
                padding: "2rem",
                margin: "2rem 0",
                borderRadius: "1rem",
                width: "100%",
              }}
            >
              <Typography variant="h4" margin={"2rem 0"} width={"100%"}>
                Last Messages
              </Typography>
              {"Chat"}
            </Paper>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", sm: "48%", lg: "auto" },
                position: "relative",
                maxWidth: "25rem",
                width: "100%",
              }}
            >
              <Stack
                position={"absolute"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                spacing={"0.5rem"}
              >
                <GroupIcon /> <Typography>Vs</Typography> <PersonIcon />
              </Stack>
            </Paper>
          </Stack>
          {Widgets}
        </Container>
      </AdminLayout>
    </>
  );
};

export default DashBoard;
