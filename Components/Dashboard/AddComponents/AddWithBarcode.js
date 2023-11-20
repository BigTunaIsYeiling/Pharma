"use client";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
export const AddWithBarcode = ({ products, items, setItems }) => {
  const [barcode, setBarcode] = useState("");
  const [amount, SetAmount] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    // Create a function to handle the timeout logic
    const handleTimeout = () => {
      if (barcode !== "") {
        submitFunction();
      }
      setBarcode("");
      inputRef.current.focus();
    };
    const timeoutId = setTimeout(handleTimeout, 200);
    return () => clearTimeout(timeoutId);
  }, [barcode]);

  const handleInputChange = (event) => {
    setBarcode(event.target.value);
  };

  const submitFunction = () => {
    if (barcode === "") {
      return toast.error("الكود غير موجود");
    }
    const productFound = products.find(
      (p) => p.type.barcode === barcode && !p.sold
    );
    if (!productFound) {
      return toast.error("المنتج غير موجود");
    }
    if (productFound.sold) {
      return toast.error("المننج مباع");
    }
    if (productFound.number_of_elements < Number(amount)) {
      return toast.error("الكميه غير كافيه");
    }
    const itemFound = items.find((p) => p.product.id === productFound.id);
    if (itemFound) {
      if (productFound.number_of_elements < itemFound.amount + 1) {
        return toast.error("الكميه غير كافيه");
      }
      // raise the amount of the item by one
      return setItems((prev) => {
        return prev.map((item) => {
          if (item.product.id === productFound.id) {
            return {
              ...item,
              amount: item.amount + 1,
              price:
                products.find((p) => p.type.barcode === barcode).type
                  .price_per_element *
                (item.amount + 1),
            };
          }
          return item;
        });
      });
    }
    return setItems((prev) => {
      return [
        ...prev,
        {
          product: {
            id: productFound.id,
          },
          amount: Number(amount) === 0 ? 1 : Number(amount),
          price:
            products.find((p) => p.type.barcode === barcode).type
              .price_per_element * (Number(amount) === 0 ? 1 : Number(amount)),
        },
      ];
    });
  };
  return (
    <Box padding={"3rem"} sx={{ direction: "rtl" }}>
      <Box fontWeight={600}>اضافه عنصر</Box>
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
          placeholder={"الكود"}
          value={barcode}
          onChange={handleInputChange}
          ref={inputRef}
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
          onChange={(e) => SetAmount(e.target.value)}
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
        >
          تاكيد
        </Button>
      </Stack>
    </Box>
  );
};
