"use client";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { UpdateOrder } from "../UpdateComponents/UpdateOrder";
import { DeleteOrder } from "../DeleteComponents/DeleteOrder";
import { OrderItems } from "./OrderItems";
const OrderRows = ({
  i,
  customer,
  time,
  paid,
  total_price,
  items,
  customers,
  products,
  id,
  admin,
}) => {
  const [open, setOpen] = useState(false);
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const Nativehour = date.getHours();
  const minutes = date.getMinutes();
  const hours = () => {
    const twelveHourHour = Nativehour % 12;
    if (twelveHourHour === 0) {
      return 12;
    }
    return twelveHourHour;
  };
  const twelveHourHourWithSuffix = `${
    Nativehour < 12
      ? hours() < 4 || Nativehour % 12 === 0
        ? "ليلًا"
        : "صباحاً"
      : hours() < 4
      ? "ظهراً"
      : "مساءً"
  }`;
  const formattedTime = () => {
    const paddedHours = hours().toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    return `${paddedHours}:${paddedMinutes} ${" " + twelveHourHourWithSuffix} `;
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" align="right">
          {i + 1}
        </TableCell>
        <TableCell
          align="right"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          {customer ? customer.name : "مشتري"}
        </TableCell>
        <TableCell
          align="right"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          {`${year} / ${month} / ${day}`}
        </TableCell>
        <TableCell align="right">{formattedTime()}</TableCell>
        <TableCell align="right">{total_price}</TableCell>
        <TableCell align="right">{paid}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiUpArrowAlt color="#0C356A" /> : <BiDownArrowAlt />}
          </IconButton>
        </TableCell>
        {admin && (
          <TableCell align="right">
            <UpdateOrder
              customerId={customer?.id}
              customers={customers}
              products={products}
              orderId={id}
              OrderItems={items}
              Orderpaid={paid}
            />
          </TableCell>
        )}
        {admin && (
          <TableCell align="right">
            <DeleteOrder id={id} />
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={9}
          padding={"none"}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#0C356A" }}>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      الاسم
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      الكميه
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      المتبقي
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      سعر الوحده
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      السعر الكلي
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      اضافه للنواقص
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, index) => {
                    return <OrderItems key={item.id} index={index} {...item} />;
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default OrderRows;
