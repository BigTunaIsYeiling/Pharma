"use client";
import { Box, Stack } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import OrdersTable from "./OrdersTable";
import { AddOrder } from "../AddComponents/AddOrder";
import { OrderFilter } from "../Filters components/OrderFilter";
const OrdersView = ({ orders, customers, products }) => {
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
              الطلبات
            </Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <OrderFilter data={orders} />
            <AddOrder customers={customers} products={products} />
          </Stack>
        </Stack>
        {orders.length === 0 ? (
          <Box
            marginRight={{ xs: "0", sm: "65px" }}
            textAlign="center"
            fontSize={{ xs: "7vw", sm: "3vw" }}
            paddingY={"3rem"}
          >
            لا يوجد بيانات
          </Box>
        ) : (
          <OrdersTable
            orders={orders}
            customers={customers}
            products={products}
          />
        )}
      </Stack>
    </Box>
  );
};
export default OrdersView;