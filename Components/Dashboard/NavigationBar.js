"use client";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { VscGroupByRefType } from "react-icons/vsc";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { IoPeople } from "react-icons/io5";
import { SiProducthunt } from "react-icons/si";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadCSV from "./UploadCsv";
import { closenav, navwidth } from "@/Lib/NavSlice";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { AddUser } from "./AddComponents/AddUser";
const NavigationBar = ({ admin }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navi = useRef();
  const fullwidthNav = useSelector(navwidth);
  const dispatch = useDispatch();
  const NavOptions = [
    {
      text: "انواع",
      path: "/Dashboard/Types",
    },
    {
      text: "منتجات",
      path: "/Dashboard/Products",
    },
    {
      text: "اوشك على الانتهاء",
      path: "/Dashboard/Expired",
    },
    {
      text: "عملاء",
      path: "/Dashboard/Customers",
    },
    {
      text: "طلبات",
      path: "/Dashboard/Orders",
    },
    {
      text: "شركات",
      path: "/Dashboard/Companies",
    },
    {
      text: "طلبات الشراء",
      path: "/Dashboard/Purchases",
    },
  ];
  const router = useRouter();
  const Logout = async () => {
    await fetch("http://127.0.0.1:8000/accounts/logout/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
    })
      .then(() => {
        Cookies.remove("key");
        Cookies.remove("accessToken");
      })
      .finally(() => {
        router.push("/");
      });
  };
  return (
    <Box
      width={!fullwidthNav ? "65px" : "181px"}
      overflow="hidden"
      className="navooa"
      height={"100%"}
      ref={navi}
      display={{ xs: "none", sm: "block" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => dispatch(closenav())}>
          <RxDoubleArrowLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {NavOptions.map((opt, i) => (
          <ListItem
            key={opt.text}
            disablePadding
            sx={{
              " .MuiListItemText-root": {
                flex: "0 auto",
              },
            }}
          >
            <ListItemButton LinkComponent={Link} href={opt.path}>
              <ListItemIcon>
                {i === 1 && (
                  <SiProducthunt
                    color={
                      pathname === "/Dashboard/Products" ? "#0C356A" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 0 && (
                  <VscGroupByRefType
                    color={pathname === "/Dashboard/Types" ? "#0C356A" : "#777"}
                    size={"22px"}
                  />
                )}
                {i === 2 && (
                  <CgDanger
                    color={
                      pathname === "/Dashboard/Expired" ? "#0C356A" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 3 && (
                  <IoPeople
                    color={
                      pathname === "/Dashboard/Customers" ? "#0C356A" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 4 && (
                  <HiClipboardDocumentList
                    color={
                      pathname === "/Dashboard/Orders" ? "#0C356A" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 5 && (
                  <HiOutlineOfficeBuilding
                    color={
                      pathname === "/Dashboard/Companies" ? "#0C356A" : "#777"
                    }
                    size={"22px"}
                  />
                )}
                {i === 6 && (
                  <AiOutlineShoppingCart
                    color={
                      pathname === "/Dashboard/Purchases" ? "#0C356A" : "#777"
                    }
                    size={"22px"}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={opt.text} sx={{ whiteSpace: "nowrap" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <AddUser admin={admin} />
      </List>
      <List
        sx={{ position: "absolute", bottom: "5%", left: "0", width: "100%" }}
      >
        <ListItem
          disablePadding
          sx={{
            " .MuiListItemText-root": {
              flex: "0 auto",
            },
          }}
        >
          <ListItemButton onClick={Logout}>
            <ListItemIcon>
              <BiLogOut size={"22px"} />
            </ListItemIcon>
            <ListItemText
              primary={"تسجيل الخروج"}
              sx={{ whiteSpace: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <UploadCSV open={open} handleClose={handleClose} />
    </Box>
  );
};
export default NavigationBar;
