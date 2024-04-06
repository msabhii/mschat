import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Group as GroupIcon,
  KeyboardBackspace,
  ManageAccounts as ManageAccountsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Link } from "../Styles/StyleComponents";
//! ---------------------Import Statments------------------------------------

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "User",
    path: "/admin/user-managment",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chat",
    path: "/admin/group-managment",
    icon: <GroupIcon />,
  },
  {
    name: "Message",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const isAdmin = true;

const SideBar = ({ w = "100%" }) => {
  const location = useLocation();

  const logOutHandler = () => {
    console.log("Logout");
  };

  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        mschat
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname == tab.path && {
                bgcolor: "#5F388C",
                color: "white",
                ":hover": { bgcolor: "#8C49A3" },
                borderRadius: "20px",
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logOutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    //* To handle the click on the menu button
    setIsMobile((prev) => !prev);
  };

  const handleMobileClose = () => {
    //* To handle the click on the after menu is open  button
    setIsMobile(false);
  };
  if (!isAdmin) return <Navigate to="/admin" />;
  return (
    <Grid container minHeight="100vh">
      <Box>
        <Tooltip title="Menu">
          <IconButton
            sx={{
              position: "fixed",
              display: {
                xs: "block",
                sm: "none",
              },
              right: "1rem",
              top: "1rem",
            }}
            onClick={handleMobile}
          >
            {isMobile ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <SideBar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={8}
        lg={9}
        sx={{
          display: { xs: "block" },
          bgcolor: "#f5f5f5",
        }}
      >
        <IconButton
          sx={{
            top: "2rem",
            left: "2rem",
            bgcolor: "#39254D",
            ":hover": {
              bgcolor: "#534582",
            },
            position: "relative",
            color: "white",
          }}
        >
          <KeyboardBackspace />
        </IconButton>
        <Box padding={"3rem"}>{children}</Box>
      </Grid>
      <Drawer open={isMobile} onClose={handleMobileClose}>
        <SideBar w={"50vw "} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
