"use client";
import { Box, Button, Dialog, Stack } from "@mui/material";
import ProductsSelection from "../OrdersView/ProductsSelection";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosAdd } from "react-icons/io";
export const AddWithName = ({ products, items, setItems, setfocused }) => {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setfocused(false);
  };
  const handleClose = () => {
    setOpen(false);
    setfocused(true);
  };
  return (
    <>
      <Stack direction={"row"} sx={{ direction: "ltr" }} spacing={"3px"}>
        <Button
          variant="contained"
          color="success"
          startIcon={<IoIosAdd />}
          onClick={handleClickOpen}
        >
          اضافه بالاسم
        </Button>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"} sx={{ direction: "rtl" }}>
          <Box fontWeight={600}>اضافه عنصر</Box>
          <Stack direction={"column"} spacing={"10px"} marginTop={"1rem"}>
            <ProductsSelection
              data={products}
              product={product}
              setProduct={setProduct}
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
              placeholder={"الكميه"}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              onClick={() => {
                if (product === "" || product === null || !product) {
                  return toast.error("يرجى اختيار المنتج");
                }
                const productObject = products.find((p) => p.id === product);
                if (productObject.owned_elements === 0) {
                  return toast.error("المنتج غير متوفر");
                }
                const itemFound = items.find(
                  (p) => p.product.id === productObject.id
                );
                if (itemFound) {
                  if (
                    productObject.owned_elements <
                    itemFound.amount +
                      (amount == 0 || amount == "" ? 1 : Number(amount))
                  ) {
                    return toast.error("الكميه غير كافيه");
                  }
                  setItems((prev) => {
                    return prev.map((item) => {
                      if (item.product.id === productObject.id) {
                        return {
                          ...item,
                          amount:
                            Number(amount) === 0 || amount == ""
                              ? item.amount + 1
                              : item.amount + Number(amount),
                          price:
                            products.find((p) => p.id === product)
                              .price_per_element *
                            (item.amount +
                              (Number(amount) === 0 || amount == ""
                                ? 1
                                : Number(amount))),
                        };
                      }
                      return item;
                    });
                  });
                  return toast.success(`تم زياده الكميه`);
                }
                setItems((prev) => {
                  return [
                    ...prev,
                    {
                      product: {
                        id: product,
                      },
                      amount: Number(amount) === 0 ? 1 : Number(amount),
                      price:
                        products.find((p) => p.id === product)
                          .price_per_element *
                        (Number(amount) === 0 ? 1 : Number(amount)),
                    },
                  ];
                });
                return toast.success(`تم الاضافه`);
              }}
            >
              تاكيد
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};
