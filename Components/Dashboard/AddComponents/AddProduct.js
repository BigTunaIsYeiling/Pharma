"use client";
import { AddProductAction } from "@/Lib/actions";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import BasicSelect from "../ProductsView/ProductsTypesSelection";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
export const AddProduct = ({ types }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const [product, setProduct] = useState({
    type: "",
    barcode: "",
    expiration: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const AddProductMethod = async () => {
    await fetch("http://127.0.0.1:8000/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    }).then((res) => {
      if (res.ok) {
        setProduct({
          type: "",
          barcode: "",
          expiration: "",
        });
        router.refresh();
        return toast.success("تمت بنجاح");
      } else {
        const data = res.json();
        return toast.error(data);
      }
    });
  };
  return (
    <>
      <Tooltip title="اضافه منتج" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={"3rem"} sx={{ direction: "rtl" }}>
          <Box fontWeight={600}>اضافه منتج</Box>
          <Stack direction={"column"} spacing={"10px"} marginTop={"1rem"}>
            <BasicSelect
              data={types}
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
              placeholder={"الكود"}
              name="barcode"
              onChange={handleChange}
              value={product.barcode}
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
                direction: "rtl",
              }}
              placeholder={"الانتهاء"}
              name="expiration"
              onChange={handleChange}
              type="date"
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onBlur={(e) => {
                e.target.type = "text";
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
              onClick={AddProductMethod}
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
