import {
  AttachFile as AttachFileIcon,
  Send as SendIcnon,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { useRef } from "react";
import { grayColor, sendIcon } from "../Components/Constants/Color";
import { sampleMessage } from "../Components/Constants/SampleData";
import FileMenu from "../Components/Dialogs/FileMenu";
import AppLayout from "../Components/LayOut/AppLayout";
import MessageComponent from "../Components/Shared/MessageComponent";
import { InputBox } from "../Components/Styles/StyleComponents";

//! -----------------------Import Statments-------------------------------

const user = {
  _id: "dfdfdd",
  name: "Abhishek",
};
const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowy: "auto",
        }}
      >
        {/* Message */}
        {sampleMessage.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type a message..." fullWidth />
          <IconButton
            type="submit"
            sx={{
              background: sendIcon,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5",
              "&:hover": {
                bgcolor: "#6B298C",
              },
            }}
          >
            <SendIcnon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};
export default AppLayout()(Chat);
