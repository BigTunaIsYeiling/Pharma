"use client";
import { Box, Button, Dialog, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { RiCloseLine, RiFileEditFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { AddWithBarcode } from "../AddComponents/AddWithBarcode";
import { RendredTable } from "../OrdersView/RendredTable";
import { AddWithName } from "../AddComponents/AddWithName";
export const UpdateOrder = ({
  products,
  Orderpaid,
  OrderItems,
  customerId,
  orderId,
}) => {
  const [open, setOpen] = useState(false);
  const [focused, setfocused] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [items, setItems] = useState(OrderItems);
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };
  const total = calculateTotalPrice();
  const [paid, SetPaid] = useState(Orderpaid);
  const [customer, setCustomer] = useState(customerId);
  const router = useRouter();
  const handleUpdate = async () => {
    await fetch(`http://127.0.0.1:8000/orders/${orderId}/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
      body: JSON.stringify({
        customer,
        paid,
        items: items.map((item) => {
          return { product: item.product.id, amount: item.amount };
        }),
      }),
    }).then(async (res) => {
      if (res.ok) {
        handleClose();
        toast.success("تم تحديث الطلب");
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
        <Box
          padding={"3rem"}
          sx={{ direction: "rtl", overflow: "hidden", position: "relative" }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontWeight={600}>تعديل طلب</Box>
            <AddWithName
              products={products}
              setItems={setItems}
              setfocused={setfocused}
              items={items}
            />
          </Stack>
          <Stack direction={"column"} marginTop={"1rem"}>
            <AddWithBarcode
              focused={focused}
              products={products}
              items={items}
              setItems={setItems}
            />
            <RendredTable
              total={total}
              items={items}
              products={products}
              setItems={setItems}
            />
            {items.length > 0 && (
              <Box
                component={"input"}
                autoCorrect={"false"}
                paddingY={"10px"}
                paddingX="8px"
                marginY={2}
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
                value={paid}
                onChange={(e) => SetPaid(e.target.value)}
                onMouseEnter={() => setfocused(false)}
                onMouseLeave={() => setfocused(true)}
              />
            )}
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
