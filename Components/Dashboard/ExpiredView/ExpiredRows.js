"use client";
import { TableCell, TableRow } from "@mui/material";
const ExRows = ({
  id,
  type,
  barcode,
  number_of_elements,
  sold,
  index,
  expiration,
}) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {index + 1}
      </TableCell>
      <TableCell align="right">{type.name}</TableCell>
      <TableCell align="right">{barcode}</TableCell>
      <TableCell align="right">{number_of_elements}</TableCell>
      <TableCell align="right">{sold ? "غير موجوده" : "متوفر"}</TableCell>
      <TableCell align="right">{expiration}</TableCell>
    </TableRow>
  );
};
export default ExRows;
