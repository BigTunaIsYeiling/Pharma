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
import { UpdateCustomer } from "../UpdateComponents/UpdateCustomer";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { CustomerPayments } from "./CustomerPayments";
import { AddPayment } from "../AddComponents/AddPayment";
export default function CustomersRows({ i, name, dept, id, payments }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" align="right">
          {i + 1}
        </TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{dept}</TableCell>
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
          <AddPayment id={id} />
        </TableCell>
        <TableCell align="right">
          <UpdateCustomer id={id} name={name} dept={dept} />
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
                      المبلغ المدفوع
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      التاريخ
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      حذف
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments.map((item, index) => {
                    return (
                      <CustomerPayments {...item} key={item.id} i={index + 1} />
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
}
