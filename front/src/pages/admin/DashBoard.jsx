import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdminLayout from "../../Components/LayOut/AdminLayout";
import {
  AdminPanelSettings,
  Group as GroupIcon,
  Message as MessageIcon,
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
        <AdminPanelSettings
          sx={{
            color: "#5F388C",
            fontSize: "2rem",
          }}
        />
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
            color: "#5F388C",
          }}
        />
      </Stack>
    </Paper>
  );

  // * widgets
  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget
        title={"Users"}
        value={34}
        Icon={
          <PersonIcon
            sx={{
              color: "#704d99",
            }}
          />
        }
      />
      <Widget
        title={"Chats"}
        value={4}
        Icon={
          <GroupIcon
            sx={{
              color: "#704d99",
            }}
          />
        }
      />
      <Widget
        title={"Messages"}
        value={654}
        Icon={
          <MessageIcon
            sx={{
              color: "#704d99",
            }}
          />
        }
      />
    </Stack>
  );

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
                <GroupIcon
                  sx={{
                    color: "#704d99",
                  }}
                />
                <Typography>Vs</Typography>{" "}
                <PersonIcon
                  sx={{
                    color: "#704d99",
                  }}
                />
              </Stack>
            </Paper>
          </Stack>
          {Widgets}
        </Container>
      </AdminLayout>
    </>
  );
};
const Widget = ({ title, value, Icon }) => (
  <Paper
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1rem",
      width: "20rem",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: `5px solid #704d99`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        {Icon}
      </Stack>
      <Typography>{title}</Typography>
    </Stack>
  </Paper>
);

export default DashBoard;
