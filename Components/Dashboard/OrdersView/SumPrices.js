"use client";
import { Filters } from "@/Lib/FiltersSlice";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
export const SumPrices = ({ data }) => {
  const filtersOption = useSelector(Filters);
  return (
    <Stack direction={"row-reverse"} justifyContent={"space-between"}>
      <Box fontWeight={700}>اجمالي الايرادات</Box>
      <Box fontWeight={700}>
        {data
          .filter((row) => {
            if (filtersOption.orderDate) {
              return row.time.startsWith(filtersOption.orderDate);
            } else {
              return row;
            }
          })
          .reduce(
            (accumulator, currentItem) => accumulator + currentItem.total_price,
            0
          )}
      </Box>
    </Stack>
  );
};
