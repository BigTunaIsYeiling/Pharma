"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { VscGroupByRefType } from "react-icons/vsc";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { CgDanger } from "react-icons/cg";
import { IoPeople } from "react-icons/io5";
import { SiProducthunt } from "react-icons/si";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const BottomNavBar = () => {
  const [value, setValue] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setValue((prev) => pathname);
    // eslint-disable-next-line
  });
  const NavOptions = [
    {
      text: "طلبات الشراء",
      path: "/Dashboard/Purchases",
    },
    {
      text: "شركات",
      path: "/Dashboard/Companies",
    },
    {
      text: "طلبات",
      path: "/Dashboard/Orders",
    },
    {
      text: "عملاء",
      path: "/Dashboard/Customers",
    },
    {
      text: "اوشك على الانتهاء",
      path: "/Dashboard/Expired",
    },
    {
      text: "منتجات",
      path: "/Dashboard/Products",
    },
    {
      text: "انواع",
      path: "/Dashboard/Types",
    },
  ];
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", sm: "none" },
        zIndex: 100,
      }}
      elevation={4}
    >
      <BottomNavigation value={value}>
        {NavOptions.map((opt, i) => {
          return (
            <BottomNavigationAction
              LinkComponent={Link}
              href={opt.path}
              value={opt.path}
              sx={{
                "&.Mui-selected": {
                  color: "#0C356A",
                },
                " .MuiBottomNavigationAction-label": {
                  whiteSpace: "nowrap",
                },
              }}
              label={opt.text}
              icon={
                (i === 5 && <VscGroupByRefType size={"22px"} />) ||
                (i === 6 && <SiProducthunt size={"22px"} />) ||
                (i === 4 && <CgDanger size={"22px"} />) ||
                (i === 3 && <IoPeople size={"22px"} />) ||
                (i === 2 && <HiClipboardDocumentList size={"22px"} />) ||
                (i === 1 && <HiOutlineOfficeBuilding size={"22px"} />) ||
                (i === 0 && <AiOutlineShoppingCart size={"22px"} />)
              }
              key={i}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};
export default BottomNavBar;
