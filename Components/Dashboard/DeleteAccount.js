"use client";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const DeleteUser = ({ id }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  return (
    <>
      <IconButton
        color="success"
        onClick={handleClickOpen}
        size="small"
        sx={{ marginRight: "50px" }}
      >
        <AiOutlineDelete color="red" />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle textAlign={"right"}>{" تأكيد الحذف"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            هل تريد حذف هذا المستخدم؟
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ alignSelf: "flex-start" }}>
          <Button onClick={handleClose} color="error">
            الغاء
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={async () => {
              await fetch(`http://127.0.0.1:8000/accounts/${id}/`, {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${Cookies.get("key")}`,
                },
              }).then((res) => {
                if (res.ok) {
                  handleClose();
                  toast.success("تم حذف المستخدم ");
                  return router.refresh();
                } else {
                  return res.json();
                }
              });
            }}
          >
            تاكيد
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
