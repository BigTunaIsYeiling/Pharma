"use client";
import { Box, Stack } from "@mui/material";
import { AddItem } from "./AddItem";
export const AddOrderItems = ({ items, setItems, products }) => {
  return (
    <Stack direction={"column"} width="100%" marginTop={3} >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box>العناصر</Box>
        <AddItem items={items} setItems={setItems} products={products} />
      </Stack>
    </Stack>
  );
};
