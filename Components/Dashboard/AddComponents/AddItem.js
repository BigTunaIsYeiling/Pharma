"use client";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Dialog, IconButton, Paper, Tooltip } from "@mui/material";
import { MdAddCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { AddWithBarcode } from "./AddWithBarcode";
import { AddWithName } from "./AddWithName";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { DialogPosition, Dragging } from "@/Lib/DialogSlice";
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
export const AddItem = ({ items, setItems, products }) => {
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
  function PaperComponent(props) {
    const dispatch = useDispatch();
    const position = useSelector(DialogPosition);
    const handleDrag = (e, data) => {
      dispatch(Dragging({ x: data.x, y: data.y }));
    };
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
        onDrag={handleDrag}
        position={position}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  return (
    <>
      <Tooltip title="اضافه عنصر" arrow onClick={handleClickOpen}>
        <IconButton>
          <MdAddCircle color="black" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <Box sx={{ width: "100%", padding: 2, direction: "rtl" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              sx={{ cursor: "move" }}
              id="draggable-dialog-title"
            >
              <Tab label="اسم العنصر" {...a11yProps(0)} />
              <Tab label="كود العنصر" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AddWithName
              products={products}
              items={items}
              setItems={setItems}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <AddWithBarcode
              products={products}
              items={items}
              setItems={setItems}
            />
          </CustomTabPanel>
        </Box>
      </Dialog>
    </>
  );
};
