"use client";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
export const AddWithBarcode = ({ products, items, setItems }) => {
  const [barcode, setBarcode] = useState("");
  const [amount, SetAmount] = useState("");
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
          onChange={(e) => setBarcode(e.target.value)}
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
          onClick={() => {
            setItems((prev) => {
              return [
                ...prev,
                {
                  product: {
                    id: products.find((p) => p.barcode === barcode).id,
                  },
                  amount: Number(amount) === 0 ? 1 : Number(amount),
                  price:
                    products.find((p) => p.barcode === barcode).type
                      .price_per_element *
                    (Number(amount) === 0 ? 1 : Number(amount)),
                },
              ];
            });
          }}
        >
          تاكيد
        </Button>
      </Stack>
    </Box>
  );
};
