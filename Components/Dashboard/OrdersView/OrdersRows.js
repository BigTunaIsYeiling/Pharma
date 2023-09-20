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
}) => {
  const [open, setOpen] = useState(false);
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
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
          {customer.name}
        </TableCell>
        <TableCell
          align="right"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          {`${year} / ${month} / ${day}`}
        </TableCell>
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
        <TableCell align="right">
          <UpdateOrder
            customerId={customer.id}
            customers={customers}
            products={products}
            orderId={id}
            OrderItems={items}
            Orderpaid={paid}
          />
        </TableCell>
        <TableCell align="right">
          <DeleteOrder id={id} />
        </TableCell>
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
                      سعر الوحده
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      السعر الكلي
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, index) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell align="right">{index + 1}</TableCell>
                        <TableCell component="th" scope="row" align="right">
                          {item.product.type.name}
                        </TableCell>
                        <TableCell align="right">{item.amount}</TableCell>
                        <TableCell align="right">
                          {item.product.type.price_per_element}
                        </TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                      </TableRow>
                    );
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
