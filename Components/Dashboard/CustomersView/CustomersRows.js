"use client";
import { TableCell, TableRow } from "@mui/material";
import { UpdateCustomer } from "../UpdateComponents/UpdateCustomer";
export default function CustomersRows({ i, name, dept, id }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {i + 1}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{dept}</TableCell>
      <TableCell align="right">
        <UpdateCustomer id={id} name={name} dept={dept} />
      </TableCell>
    </TableRow>
  );
}
