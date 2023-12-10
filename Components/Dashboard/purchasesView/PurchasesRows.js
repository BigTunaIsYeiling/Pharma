"use client";
import { Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import { DeletePurchase } from "../DeleteComponents/DeletePurchases";
import { UpdatePurchase } from "../UpdateComponents/UpdatePurchase";
import { PurchaseElementsBody } from "./PurchaseElementsBody";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { useState } from "react";
export const PurchasesRows = ({
  company,
  time,
  price,
  paid,
  id,
  index,
  admin,
}) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" align="right">
          {index + 1}
        </TableCell>
        <TableCell align="right">{company.name}</TableCell>
        <TableCell align="right">{`${year} / ${month} / ${day}`}</TableCell>
        <TableCell align="right">{price}</TableCell>
        <TableCell align="right">{paid}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiUpArrowAlt color="#F6490D" /> : <BiDownArrowAlt />}
          </IconButton>
        </TableCell>
        {admin && (
          <TableCell align="right">
            <UpdatePurchase
              id={id}
              company={company.id}
              paid={paid}
              price={price}
            />
          </TableCell>
        )}
        {admin && (
          <TableCell align="right">
            <DeletePurchase id={id} />
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={10}
          padding={"none"}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <PurchaseElementsBody id={id} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
