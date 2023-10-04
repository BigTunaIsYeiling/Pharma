"use client";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdPayments } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
export const AddPayment = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [paid, setPaid] = useState(0);
  const router = useRouter();
  const AddCustomerPayment = async () => {
    await fetch("http://127.0.0.1:8000/orders/payments/", {
      method: "POST",
      body: JSON.stringify({
        paid,
        customer: id,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        toast.success("تم الاضافه");
        return handleClose();
      } else {
        const data = res.json();
        toast.error(data);
      }
    });
  };
  return (
    <>
      <Tooltip title="تسجيل حاله دفع" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdPayments color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"} sx={{ direction: "rtl" }}>
          <Box fontWeight={600}>تسجيل حاله دفع</Box>
          <Stack direction={"column"} spacing={"10px"} marginTop={"1rem"}>
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
              placeholder={"المبلغ"}
              name="paid"
              value={paid}
              onChange={(e) => setPaid(e.target.value)}
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
              onClick={AddCustomerPayment}
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
