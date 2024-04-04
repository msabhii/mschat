import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you want to Delete This ?</DialogTitle>
        <DialogActions>
          <Button onClick={deleteHandler} color="error" variant="outlined">
            Yes
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDeleteDialog;
