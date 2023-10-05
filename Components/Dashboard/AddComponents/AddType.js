"use client";
import { AddTypeAction } from "@/Lib/actions";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
export const AddType = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="اضافه صنف" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"} sx={{ direction: "rtl" }}>
          <Box fontWeight={600}>اضافه صنف</Box>
          <Stack
            direction={"column"}
            spacing={"10px"}
            marginTop={"1rem"}
            component={"form"}
            action={async (data) => {
              const result = await AddTypeAction(data);
              if (result) {
                handleClose();
                return toast.success("تم انشاء البيانات");
              }
            }}
          >
            <Box
              component={"input"}
              autoCorrect={"false"}
              paddingY={"10px"}
              paddingX="8px"
              sx={{
                outline: "0",
                border: "0",
                ":focus": {
                  boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                borderRadius: "3px",
                fontWeight: 400,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              placeholder={"الاسم"}
              name="name"
            />
            <Box
              component={"input"}
              autoCorrect={"false"}
              paddingY={"10px"}
              paddingX="8px"
              sx={{
                outline: "0",
                border: "0",
                ":focus": {
                  boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                borderRadius: "3px",
                fontWeight: 400,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              placeholder={"الباركود"}
              name="barcode"
            />
            <Box
              component={"input"}
              autoCorrect={"false"}
              paddingY={"10px"}
              paddingX="8px"
              sx={{
                outline: "0",
                border: "0",
                ":focus": {
                  boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                borderRadius: "3px",
                fontWeight: 400,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              placeholder={"العدد"}
              name="elements"
            />
            <Box
              component={"input"}
              autoCorrect={"false"}
              paddingY={"10px"}
              paddingX="8px"
              sx={{
                outline: "0",
                border: "0",
                ":focus": {
                  boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                borderRadius: "3px",
                fontWeight: 400,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              placeholder={"السعر للواحد"}
              name="price"
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                "&.MuiButton-root": {
                  fontWeight: 600,
                  textTransform: "none",
                  backgroundColor: "#0C356A",
                },
                alignSelf: "flex-end",
              }}
              type="submit"
            >
              تاكيد
            </Button>
          </Stack>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "1%", left: "1%" }}
          >
            <RiCloseLine />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};
