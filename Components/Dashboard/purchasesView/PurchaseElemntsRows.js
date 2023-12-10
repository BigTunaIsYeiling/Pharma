import { TableCell, TableRow } from "@mui/material";
export const PurchaseElemntsRows = ({ i, type, number_of_boxes }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {i + 1}
      </TableCell>
      <TableCell align="right">{type.name}</TableCell>
      <TableCell align="right">
        {type.barcode === "" || !type.barcode ? "----" : type.barcode}
      </TableCell>
      <TableCell align="right">{type.number_of_elements}</TableCell>
      <TableCell align="right">{type.price_per_element}</TableCell>
      <TableCell align="right">{number_of_boxes}</TableCell>
    </TableRow>
  );
};
