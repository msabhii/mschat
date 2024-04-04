import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../Constants/SampleData";
import UserItem from "../Shared/UserItem";
//! -------------------Import Statments--------------------------------------
const AddMemberDialog = ({ adMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectMembers, setSelectMembers] = useState([]);

  const SelectMemberHandler = (id) => {
    setSelectMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const addMemberSubmitHandler = () => {
    setSelectMembers([]);
    setMembers([]);
  };
  const closeHandler = () => {
    setSelectMembers([]);
    setMembers([]);
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack width={"20rem"} padding={"2rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => {
              return (
                <UserItem
                  key={i._id}
                  user={i}
                  handler={SelectMemberHandler}
                  isAdded={selectMembers.includes(i._id)}
                />
              );
            })
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-evenly",
          padding: "2rem",
        }}
        justifyContent={"center"}
      >
        <Button
          variant="contained"
          disabled={isLoadingAddMember}
          onClick={addMemberSubmitHandler}
        >
          Submit
        </Button>
        <Button onClick={closeHandler} color="error" variant="outlined">
          Cancle
        </Button>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
