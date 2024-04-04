import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { purple } from "../Constants/Color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
const SearchDialog = lazy(() => import("../Specific/Search"));
const NotificationDialog = lazy(() => import("../Specific/Notifications"));
const NewGroupDiaLog = lazy(() => import("../Specific/NewGroup"));
//! ------------------------------import Statement-----------------------------
const Header = () => {
  const Navigate = useNavigate(); //* Using to navigate on Click

  const [isMobile, setIsMobile] = useState();
  const [isSearch, setIsSearch] = useState();
  const [isNewGroup, setIsNewGroup] = useState();
  const [isNotification, setIsNotification] = useState();

  //* Using on Menu Button
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  //* Using on Search Button
  const OpenSearchDialog = () => {
    setIsSearch(!isSearch);
  };
  //* Using on Add Button
  const OpenNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };

  const OpenNotification = () => {
    setIsNotification(!isNotification);
  };

  const LogOutHandler = () => {
    console.log("LogOutHandler");
  };

  const NavigateToGroup = () => Navigate("/groups"); //* Navigating to the group
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: "#a855f7" }}>
          {" "}
          {/* using color from color.js */}
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              mschat
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={OpenSearchDialog}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={OpenNewGroup}
              />
              <IconBtn
                title="Manage Group"
                icon={<GroupIcon />}
                onClick={NavigateToGroup}
              />
              <IconBtn
                title="Notification"
                icon={<Notifications />}
                onClick={OpenNotification}
              />
              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={LogOutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDiaLog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};
//* Defining the Icon Function
const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;

//* Using box componet from meterialUi
