import React from "react";
import Header from "./Header";
import Title from "../Shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { sampleChats } from "../Constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";
//! --------------------------Import Statments--------------------------------------
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };
    return (
      <div style={{ height: "100vh" }}>
        <Title />
        <Header />
        <Grid container height={"calc(100vh-4rem)"} style={{ height: "100%" }}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            style={{ height: "100%" }}
          >
            {/* //? here we are dividing the display in 3 parts according the screen size. If the screen is sm the first grid will be hidden.*/}
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            className="bg-gradient-to-br from-purple-400 to-gray-450"
            style={{ height: "100%" }}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              backgroundColor: "#9161AB",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
