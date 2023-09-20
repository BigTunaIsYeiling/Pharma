"use client";
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { CgMenuGridR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCog } from "react-icons/fa";
import { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import UploadCSV from "./UploadCsv";
import { navwidth, opennav } from "@/Lib/NavSlice";
import { AddUser } from "./AddComponents/AddUser";
const Header = ({ admin }) => {
  const fullwidthNav = useSelector(navwidth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [opend, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosed = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 0,
        marginRight: fullwidthNav ? "181px" : "0px",
        transition: "0.25s",
        position: "relative",
        zIndex: 100,
        direction: "rtl",
      }}
    >
      <AppBar position="relative" sx={{ backgroundColor: "#0C356A" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              ml: 2,
              display: { xs: "none", sm: fullwidthNav ? "none" : "block" },
            }}
            onClick={() => dispatch(opennav())}
          >
            <CgMenuGridR />
          </IconButton>
          <Box
            component={"p"}
            fontWeight={700}
            fontSize="20px"
            marginLeft={"2px"}
            flexGrow={1}
          >
            الصفحه الرئيسيه
          </Box>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <FaUserCog color="white" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <AddUser admin={admin} />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <BiLogOut fontSize={"25px"} />
              </ListItemIcon>
              <ListItemText>تسجيل خروج</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <UploadCSV open={opend} handleClose={handleClosed} />
    </Box>
  );
};
export default Header;
