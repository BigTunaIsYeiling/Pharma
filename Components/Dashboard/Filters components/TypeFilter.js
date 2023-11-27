"use client";
import {
  FilterLack,
  FilterType,
  FilterTypeBarcode,
  Filters,
} from "@/Lib/FiltersSlice";
import {
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { AiOutlineSliders } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
export const TypeFilters = () => {
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
      <Drawer open={open} onClose={handleClose} anchor="right">
        <Stack direction={"column"} spacing="4rem" sx={{ padding: "20px" }}>
          <Stack direction={"column"} spacing="11px">
            <Box fontWeight={700} alignSelf={"flex-end"}>
              بحث
            </Box>
            <Stack direction={"column"} spacing="10px">
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
                value={filtersOption.type}
                onChange={(e) => dispatch(FilterType(e.target.value))}
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
                  direction: "rtl",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"الباركود"}
                value={filtersOption.typeBarcode}
                onChange={(e) => dispatch(FilterTypeBarcode(e.target.value))}
              />
              <FormGroup sx={{ alignSelf: "flex-end", direction: "rtl" }}>
                <FormControlLabel
                  sx={{ margin: "10px 0 0 0" }}
                  control={<Checkbox />}
                  label="النواقص"
                  checked={filtersOption.lack}
                  onChange={(e) => dispatch(FilterLack(e.target.checked))}
                />
              </FormGroup>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};
