"use client";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { AddOrderItems } from "./AddOrderItems";
import BasicSelect from "../OrdersView/CustomersOrders";
import { RendredItems } from "./RendredItems";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export const AddOrder = ({ customers, products }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [items, setItems] = useState([]);
  const [paid, setPaid] = useState(0);
  const [customer, setCustomer] = useState("");
  const router = useRouter();
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };
  const total = calculateTotalPrice();
  const AddOrderMethod = async () => {
    if (items.length == 0) {
      return toast.error("يجب عليك إضافة عناصر للطلب");
    }
    await fetch("http://127.0.0.1:8000/orders/", {
      method: "POST",
      body: JSON.stringify({
        customer,
        paid,
        items: items.map((item) => {
          return { product: item.product.id, amount: item.amount };
        }),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        toast.success("تمت بنجاح");
        setCustomer("");
        setItems([]);
        setPaid("");
        return handleClose();
      } else {
        const data = res.json();
        toast.error(data);
      }
    });
  };
  return (
    <>
      <Tooltip title="اضافه طلب" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"} sx={{ direction: "rtl" }}>
          <Box fontWeight={600}>اضافه طلب</Box>
          <Stack direction={"column"} marginTop={"1rem"}>
            <BasicSelect
              data={customers}
              SetcustomerId={setCustomer}
              customer={customer}
            />
            <AddOrderItems
              items={items}
              setItems={setItems}
              products={products}
            />
            {items.length > 0 && (
              <Stack
                direction={"column"}
                spacing={"8px"}
                alignItems={"flex-start"}
                marginY={3}
              >
                {items.map((item) => (
                  <RendredItems
                    key={item.product}
                    id={item.product.id}
                    amount={item.amount}
                    products={products}
                    setItems={setItems}
                  />
                ))}

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Box>السعر الكلي</Box>
                  <Box>{total}</Box>
                </Stack>
              </Stack>
            )}
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
                onChange={(e) => setPaid(e.target.value)}
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
              onClick={AddOrderMethod}
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
