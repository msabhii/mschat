import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import React from "react";
import moment from "moment";
//!-----------------------------------Import Statement-------------------
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"This is text"} />
      <ProfileCard
        heading={"Username"}
        text={"mscode07"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Abhishek Thakur"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined Date"}
        text={moment("2024-01-25T00:00:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"White"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="gray" color={"#411159"} fontWeight={"400"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
