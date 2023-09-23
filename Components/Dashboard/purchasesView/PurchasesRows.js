"use client";
import { TableCell, TableRow } from "@mui/material";
import { DeletePurchase } from "../DeleteComponents/DeletePurchases";
import { UpdatePurchase } from "../UpdateComponents/UpdatePurchase";
export const PurchasesRows = ({ company, time, price, paid, id, index }) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {index + 1}
      </TableCell>
      <TableCell align="right">{company.name}</TableCell>
      <TableCell align="right">{`${year} / ${month} / ${day}`}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{paid}</TableCell>
      <TableCell align="right">
        <UpdatePurchase
          id={id}
          company={company.id}
          paid={paid}
          price={price}
        />
      </TableCell>
      <TableCell align="right">
        <DeletePurchase id={id} />
      </TableCell>
    </TableRow>
  );
};
