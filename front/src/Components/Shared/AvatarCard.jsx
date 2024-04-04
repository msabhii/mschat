import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/Features";
//! ---------------------Improt Statemnts-------------------------------------

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <AvatarGroup max={max}>
      {avatar.map((src, index) => (
        <Avatar key={index} src={transformImage(src)} alt="testing" />
      ))}
    </AvatarGroup>
  );
};

export default AvatarCard;
