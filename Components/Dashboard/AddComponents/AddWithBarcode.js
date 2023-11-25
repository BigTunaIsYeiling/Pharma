"use client";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
export const AddWithBarcode = ({ products, items, setItems, focused }) => {
  const [barcode, setBarcode] = useState("");
  const [amount, SetAmount] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleTimeout = () => {
      if (barcode !== "") {
        submitFunction();
      }
      setBarcode("");
    };
    const timeoutId = setTimeout(handleTimeout, 200);
    return () => clearTimeout(timeoutId);
  }, [barcode]);
  const handleInputChange = (event) => {
    setBarcode(event.target.value);
    console.log(event.target.value);
  };
  const submitFunction = () => {
    if (barcode === "") {
      return toast.error("الكود غير موجود");
    }
    const productFound = products.find((p) => p.barcode === barcode);
    if (!productFound) {
      return toast.error("المنتج غير موجود");
    }
    if (productFound.owned_elements === 0) {
      return toast.error("المننج مباع");
    }
    const itemFound = items.find((p) => p.product.id === productFound.id);
    if (itemFound) {
      if (productFound.owned_elements < itemFound.amount + 1) {
        return toast.error("الكميه غير كافيه");
      }
      setItems((prev) => {
        return prev.map((item) => {
          if (item.product.id === productFound.id) {
            return {
              ...item,
              amount: item.amount + 1,
              price:
                products.find((p) => p.barcode === barcode).price_per_element *
                (item.amount + 1),
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
            id: productFound.id,
          },
          amount: amount === 0 ? 1 : amount,
          price:
            products.find((p) => p.barcode === barcode).price_per_element *
            (amount === 0 ? 1 : amount),
        },
      ];
    });
    return toast.success(`تم الاضافه للطلب `);
  };
  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);
  return (
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
        position: "absolute",
        left: "2000%",
      }}
      placeholder={"الكود"}
      value={barcode}
      onChange={handleInputChange}
      ref={inputRef}
      onBlur={() => {
        if (focused) inputRef.current.focus();
      }}
      autoFocus
    />
  );
};
