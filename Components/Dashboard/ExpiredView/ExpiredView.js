"use client";
import { Box, Stack } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import ExTable from "./ExpiredTable";
const ExpiredView = ({ products }) => {
  return (
    <Box height={{ xs: "calc(100vh - 120px)", sm: "calc(100vh - 64px)" }}>
      <Stack direction={"column"} width="100%" maxHeight={"100%"}>
        <Stack
          paddingX={"0.5rem"}
          paddingY={"1rem"}
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          marginRight={{ xs: "0", sm: "65px" }}
        >
          <Stack direction={"row"} alignItems="center">
            <CgMenu color="#0C356A" />
            <Box
              fontWeight={600}
              fontSize={{ xs: "14px", sm: "16px" }}
              marginRight={"8px"}
            >
              منتجات قاربت على الانتهاء
            </Box>
          </Stack>
        </Stack>
        {products.length === 0 ? (
          <Box
            marginRight={{ xs: "0", sm: "65px" }}
            textAlign="center"
            fontSize={{ xs: "7vw", sm: "3vw" }}
            paddingY={"3rem"}
          >
            لا يوجد بيانات
          </Box>
        ) : (
          <ExTable products={products} />
        )}
      </Stack>
    </Box>
  );
};
export default ExpiredView;