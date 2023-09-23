"use client";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { RiCloseLine,RiFileEditFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export const UpdatePurchase = ({ id, company, price, paid }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [PricePaid, setPaid] = useState(paid);
  const router = useRouter();
  const handleUpdate = async () => {
    await fetch(`http://127.0.0.1:8000/finance/incoming_orders/${id}/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
      body: JSON.stringify({
        company,
        price,
        paid: PricePaid,
      }),
    }).then(async (res) => {
      if (res.ok) {
        handleClose();
        toast.success("تم تحديث طلب الشراء");
        return router.refresh();
      } else {
        const data = await res.json();
        return toast.error(data);
      }
    });
  };
  return (
    <>
      <IconButton onClick={handleClickOpen} size="small">
        <RiFileEditFill color="green" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"} sx={{ direction: "rtl" }}>
          <Box fontWeight={600}>تعديل مبلغ طلب</Box>
          <Stack
            direction={"column"}
            spacing={"10px"}
            marginTop={"1rem"}
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
              placeholder={"المدفوع"}
              name="PricePaid"
              value={PricePaid}
              onChange={(e) => {
                setPaid(e.target.value);
              }}
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
              onClick={handleUpdate}
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
