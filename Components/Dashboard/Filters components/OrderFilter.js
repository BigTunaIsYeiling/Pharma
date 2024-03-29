"use client";
import { FilterOrderName, FilterOrderUser, Filters } from "@/Lib/FiltersSlice";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { AiOutlineSliders } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DateSelect } from "./DateSelect";
import { Drawer } from "antd";
import { SumPrices } from "../OrdersView/SumPrices";
export const OrderFilter = ({ data, admin }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const filtersOption = useSelector(Filters);
  return (
    <Box>
      <Tooltip title="بحث" arrow>
        <IconButton onClick={handleClick}>
          <AiOutlineSliders color="black" />
        </IconButton>
      </Tooltip>
      <Drawer
        open={open}
        onClose={handleClose}
        placement="right"
        width={250}
        title="بحث"
      >
        <Stack direction={"column"} spacing="4rem" sx={{ padding: "20px" }}>
          <Stack direction={"column"} spacing="11px">
            <Stack direction={"column"} spacing="20px">
              <Box fontWeight={700} alignSelf={"flex-end"}>
                حسب المستخدم
              </Box>
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
                  direction: "rtl",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"المستخدم"}
                value={filtersOption.filterOrderUser}
                onChange={(e) => dispatch(FilterOrderUser(e.target.value))}
              />
              <Box alignSelf={"flex-end"} fontWeight={700}>
                حسب التاريخ
              </Box>
              <DateSelect />
              {filtersOption.orderDate && admin && <SumPrices data={data} />}
              <Box fontWeight={700} alignSelf={"flex-end"}>
                حسب العميل
              </Box>
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
                  direction: "rtl",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"الاسم"}
                value={filtersOption.orderName}
                onChange={(e) => dispatch(FilterOrderName(e.target.value))}
              />
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};
