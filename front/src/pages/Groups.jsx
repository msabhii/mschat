import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Suspense, lazy, memo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { grayColor } from "../Components/Constants/Color";
import { sampleChats, sampleUsers } from "../Components/Constants/SampleData";
import AvatarCard from "../Components/Shared/AvatarCard";
import { Link } from "../Components/Styles/StyleComponents";
import UserItem from "../Components/Shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../Components/Dialogs/ConfirmDeleteDialog")
);

const AddMemberDialog = lazy(() =>
  import("../Components/Dialogs/AddMemberDialog")
);

//! ---------------------Import Statments-----------------------------------
const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const isAdd = false;
  //* nevigation on back button
  const navigateBack = () => {
    navigate("/");
  };

  //* handle mobile menu open
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  //* To handle the click on the after menu is open  button
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleUpdateGroupName = (e) => {
    setGroupNameUpdatedValue(e.target.value);
    e.preventDefault();
  };

  const UpdateGroupName = () => {
    setGroupName(groupNameUpdatedValue);
    setIsEdit(false);
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`GroupName ${chatId}`);
      setGroupNameUpdatedValue(`GroupName ${chatId}`);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  //* to handle to the click on the "Delete Group" button.
  const oppenConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteHandler = () => {
    console.log("Delete handler");
  };

  //* to handle to the click on the "Add members" button.

  const openAddMemberHandler = () => {
    console.log("Add member handler");
  };

  const removeMemberhandler = (id) => {
    console.log("Removing the member:", id);
  };
  //* icons for back and menu
  const IconBtns = (
    <>
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
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            color: "white",
            bgcolor: "#39254D",
            ":hover": {
              bgcolor: "#534582",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"3rem"}
      >
        {isEdit ? (
          <>
            <TextField
              value={groupNameUpdatedValue}
              placeholder="Enter New GroupName"
              onChange={handleUpdateGroupName}
            />
            <IconButton onClick={UpdateGroupName}>
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupName}</Typography>
            <IconButton
              sx={{
                color: "#39254D",
              }}
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );

  const ButtonGroup = (
    <>
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={"1rem"}
        p={{
          xs: "0",
          sm: "1rem",
          md: "1rem 4rem",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddMemberHandler}
        >
          Add members
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={oppenConfirmDeleteHandler}
        >
          Delete Group
        </Button>
      </Stack>
    </>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        className="bg-gradient-to-br from-purple-400 to-gray-450"
        item
        sm={4}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem,4rem",
              }}
              spacing={"2rem"}
              // bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >
              {sampleUsers.map((user) => (
                <Box
                  sx={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "0.5rem 2rem",
                    borderRadius: "1rem",
                  }}
                >
                  <UserItem
                    key={user._id}
                    user={user}
                    isAdded
                    handler={removeMemberhandler}
                  />
                </Box>
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
        {IconBtns}
      </Grid>
      {isAdd && (
        <>
          <Suspense fallback={<Backdrop />}>
            <AddMemberDialog />
          </Suspense>
        </>
      )}
      {ConfirmDeleteDialog && (
        <Suspense fallback={<Backdrop />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
        sx={{
          display: { xs: "block", sm: "none" },

          color: "white",
        }}
      >
        <div className="bg-gradient-to-br from-purple-400 to-gray-450 h-full ">
          <GroupList myGroups={sampleChats} chatId={chatId} />
        </div>
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => {
          return (
            <GroupListItem group={group} chatId={chatId} key={group._id} />
          );
        })
      ) : (
        <Typography textAlign={"center"} p={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} alignItems="center" spacing={"1rem"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
