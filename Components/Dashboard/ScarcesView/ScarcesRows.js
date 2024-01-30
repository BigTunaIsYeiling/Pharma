"use client";
import { TableCell, TableRow } from "@mui/material";
import { DeleteScarce } from "../DeleteComponents/DeleteScarces";
const SCRows = ({ id, name, amount, index }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {index + 1}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{amount}</TableCell>
      <TableCell align="right">
        <DeleteScarce id={id} />
      </TableCell>
    </TableRow>
  );
};
export default SCRows;
