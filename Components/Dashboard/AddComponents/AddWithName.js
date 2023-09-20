"use client";
import { Box, Button, Stack } from "@mui/material";
import ProductsSelection from "../OrdersView/ProductsSelection";
import { useState } from "react";
export const AddWithName = ({ products, items, setItems }) => {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  return (
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
            setItems((prev) => {
              return [
                ...prev,
                {
                  product: {
                    id: product,
                  },
                  amount: Number(amount),
                  price:
                    products.find((p) => p.id === product).type
                      .price_per_element * Number(amount),
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
