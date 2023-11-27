"use client";
import { TableCell, TableRow } from "@mui/material";
export default function ProductsRows({
  id,
  type,
  barcode,
  number_of_elements,
  sold,
  index,
  company,
}) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {index + 1}
      </TableCell>
      <TableCell align="right">{type.name}</TableCell>
      <TableCell align="right">{company.name}</TableCell>
      <TableCell align="right">{number_of_elements}</TableCell>
      <TableCell align="right">{sold ? "غير موجود" : "متوفر"}</TableCell>
    </TableRow>
  );
}
