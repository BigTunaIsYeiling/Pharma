"use client";
import { TableCell, TableRow } from "@mui/material";
import { UpdateType } from "../UpdateComponents/UpdateType";
export default function TypesRow({
  name,
  number_of_elements,
  i,
  price_per_element,
  boxes_owned,
  id,
  barcode,
}) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {i + 1}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        {barcode === "" || !barcode ? "----" : barcode}
      </TableCell>
      <TableCell align="right">{number_of_elements}</TableCell>
      <TableCell align="right">{price_per_element}</TableCell>
      <TableCell align="right">{boxes_owned}</TableCell>
      <TableCell align="right">
        <UpdateType
          id={id}
          name={name}
          number_of_elements={number_of_elements}
          price_per_element={price_per_element}
          barcode={barcode}
        />
      </TableCell>
    </TableRow>
  );
}
