"use client";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import BasicSelect from "../OrdersView/CustomersOrders";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AddWithBarcode } from "./AddWithBarcode";
import { RendredTable } from "../OrdersView/RendredTable";
import { AddWithName } from "./AddWithName";
export const AddOrder = ({ customers, products }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setfocused(true);
  };
  const handleClose = () => {
    setOpen(false);
    setfocused(false);
  };
  const [items, setItems] = useState([]);
  const [paid, setPaid] = useState(null);
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
        toast.success("تمت بنجاح");
        setCustomer("");
        setItems([]);
        setPaid(null);
        return router.refresh();
      } else {
        const data = res.json();
        toast.error(data);
      }
    });
  };
  const [focused, setfocused] = useState(true);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      AddOrderMethod();
    }
  };
  return (
    <>
      <Tooltip title="اضافه طلب" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box
          padding={"3rem"}
          sx={{ direction: "rtl", overflow: "hidden", position: "relative" }}
          onKeyDown={handleKeyPress}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontWeight={600}>اضافه طلب</Box>
            <AddWithName
              products={products}
              setItems={setItems}
              setfocused={setfocused}
              items={items}
            />
          </Stack>
          <Stack direction={"column"} marginTop={"1rem"}>
            <BasicSelect
              data={customers}
              SetcustomerId={setCustomer}
              customer={customer}
            />
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
                onChange={(e) => setPaid(e.target.value)}
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
