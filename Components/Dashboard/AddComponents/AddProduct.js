"use client";
import { Box, Button, Dialog, IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { AddProductType } from "./AddProductType";
import { AddProductBarcode } from "./AddProductBarcode";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const AddProduct = ({ types }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tooltip title="اضافه منتج" arrow>
        <IconButton onClick={handleClickOpen}>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ width: "100%", padding: 2, direction: "rtl" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="اسم العنصر" {...a11yProps(0)} />
              <Tab label="كود العنصر" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AddProductType types={types} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <AddProductBarcode types={types} />
          </CustomTabPanel>
        </Box>
      </Dialog>
    </>
  );
};
